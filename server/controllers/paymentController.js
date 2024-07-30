import Stripe from 'stripe';
import Order from '../models/Order.js';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe( process.env.STRIPE_SECRET_KEY );

const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => {
      return total + parseFloat(product.price) * product.quantity;
    }, 0);
};
const isValidCountryCode = (code) => {
    const validCountries = [
        'AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW', 'ZZ'
    ];
    return validCountries.includes(code);
};

// Create Stripe payment intent
export const createPayment = async (req, res) => {
    let userId;
    try {
        // console.log("success:", process.env.PAYMENT_SUCCESS_URL,"cancel:",process.env.PAYMENT_CANCEL_URL)
        const { products, address } = req.body;
        // console.log("products:", products,"address:", address)
        if (!address) {
            throw new Error("Address not provided");
        }
        if (!Array.isArray(products) || products.length === 0) {
            throw new Error("No products provided");
        }
        userId = address.userId;
        const { country } = address;
        // const { userId, country } = address;
        const currency = "USD";
        const isAddressOutsideUSA = country !== "US";

        if (!isValidCountryCode(country)) {
            throw new Error(`Invalid country code: ${country}`);
        }

        if (currency !== "USD" && !isAddressOutsideUSA) {
            throw new Error(
                "Non-USD transactions in the USA must have shipping/billing address outside the USA"
            );
        }
        const normalizedAddress = {
            ...address,
            country: isAddressOutsideUSA ? country : "US",
        };
        const lineItems = products.map((product) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: product.name,
                    images: [product.image],
                },
                unit_amount: Math.round(parseFloat(product.price) * 100),
            },
            quantity: product.quantity,
        }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: process.env.PAYMENT_SUCCESS_URL,
            cancel_url: process.env.PAYMENT_CANCEL_URL,
            shipping_address_collection: {
                allowed_countries: isAddressOutsideUSA ? [country] : ["US"], 
            },
        });
        // console.log("Ok here! ",session)
        const order = new Order({
            user: userId,
            orderItems: products.map(product => ({
                product: product._id,
                quantity: product.quantity,
            })),
            shippingAddress: normalizedAddress,
            paymentMethod: "stripe",
            totalPrice: calculateTotalAmount(products),
            paymentResult: {
                id: session.id,
                status: "pending",
            },
            isPaid: false,
        });
        await order.save();
        res.json({ session: session, order:order });
    } catch (error) {
        console.error("Error during checkout:", error);
        res.status(400).json({ error: error.message });
    }
};

// Update order after payment
export const updateOrderToPaid = async (req, res) => {
    const { paymentId, orderId } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: paymentId,
            status: 'succeeded',
            update_time: new Date().toISOString(),
            email_address: req.user.email,
        };

        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

