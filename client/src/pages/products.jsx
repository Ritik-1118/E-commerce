import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";

export default function Products() {
    const [allProducts, setAllProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [showBrandSearch, setShowBrandSearch] = useState(false);
    const [showMinInput, setShowMinInput] = useState(false);
    const [showMaxInput, setShowMaxInput] = useState(false);

    const [filter, setFilter] = useState({
        category: "",
        brand: "",
        minPrice: null,
        maxPrice: null,
    });

    const fetchAllProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/products', {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const productsData = await response.json();
                setAllProducts(productsData);
            }
        } catch (error) {
            console.error("Failed to fetch all products", error);
        }
    };

    const fetchProductsByFilter = async () => {
        try {
            const params = new URLSearchParams();
            if (filter.minPrice !== null) params.append("minPrice", filter.minPrice);
            if (filter.maxPrice !== null) params.append("maxPrice", filter.maxPrice);
            if (filter.category !== "") params.append("category", filter.category);
            if (filter.brand !== "") params.append("brand", filter.brand);

            const apiUrl = `http://localhost:8000/api/products/getByFilter/?${params.toString()}`;
            const response = await fetch(apiUrl, {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const filterData = await response.json();
                setFilterProduct(filterData);
            }
        } catch (error) {
            console.error("Failed to fetch products by filter", error);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    useEffect(() => {
        fetchProductsByFilter();
    }, [filter]);

    const handleFilterUpdate = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    const handleClearFilters = () => {
        setFilter({
            category: "",
            brand: "",
            minPrice: null,
            maxPrice: null,
        });
    };

    return (
        <div className="mt-[68px] max-w-[80rem] mx-auto pl-12 flex flex-col">
            <div className="pt-16">
                <div className="">
                    <div className="font-semibold py-4 uppercase text-3xl text-black/80">All Products</div>
                    <div>
                        Discover our wide range of products, carefully curated to meet all your needs. 
                        Whether you&apos;re looking for the latest tech gadgets or everyday essentials, 
                        we have something for everyone. Browse through our categories to find exactly what you need.
                    </div>
                </div>
                <div className="my-6 py-2 pr-2 flex items-center justify-between border rounded-md w-1/2"
                    onMouseLeave={() => {
                        setShowBrandSearch(false);
                        setShowMinInput(false);
                        setShowMaxInput(false);
                    }}
                >
                    <div className="text-xl font-bold ">Filters:</div>
                    <div className=" flex items-center justify-evenly uppercase">
                        <div className="transition ease-in-out duration-300 transform hover:scale-110">
                            <select className="px-2 mr-2"
                                name="category"
                                value={filter.category}
                                onChange={handleFilterUpdate}
                            >
                                <option disabled value="" className="uppercase">CATEGORY</option>
                                <option value="Mobile Phones">Phones</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Cameras">Cameras</option>
                                <option value="Monitors">Monitors</option>
                            </select>
                        </div>
                        <div className="relative">
                            <div className="cursor-pointer flex items-center transition ease-in-out duration-300 transform hover:scale-110"
                                onClick={() => {
                                    setShowBrandSearch(!showBrandSearch);
                                    setShowMinInput(false);
                                    setShowMaxInput(false);
                                }}
                                onMouseEnter={() => {
                                    setShowBrandSearch(true);
                                    setShowMinInput(false);
                                    setShowMaxInput(false);
                                }}
                            >
                                <span className="">Brand</span>
                                <RiArrowDropDownLine className="text-2xl mx-1" />
                            </div>
                            {showBrandSearch && <div className="absolute top-8 border border-sky-300/80 rounded-md">
                                <input
                                    type="search"
                                    name="brand"
                                    className="outline-none rounded-full px-2"
                                    value={filter.brand}
                                    onChange={handleFilterUpdate}
                                />
                            </div>}
                        </div>
                        <div className="relative">
                            <div className="cursor-pointer flex items-center transition ease-in-out duration-300 transform hover:scale-110"
                                onClick={() => {
                                    setShowMinInput(!showMinInput);
                                    setShowBrandSearch(false);
                                    setShowMaxInput(false);
                                }}
                                onMouseEnter={() => {
                                    setShowBrandSearch(false);
                                    setShowMinInput(true);
                                    setShowMaxInput(false);
                                }}
                            >
                                <span className="">Min Price</span>
                                <RiArrowDropDownLine className="text-2xl mx-1" />
                            </div>
                            {showMinInput && <div className="absolute top-8 border border-sky-300/80 rounded-md">
                                <input
                                    type="number"
                                    name="minPrice"
                                    className="outline-none rounded-full px-2"
                                    value={filter.minPrice}
                                    onChange={handleFilterUpdate}
                                />
                            </div>}
                        </div>
                        <div className="relative">
                            <div className="cursor-pointer flex items-center transition ease-in-out duration-300 transform hover:scale-110"
                                onClick={() => {
                                    setShowMaxInput(!showMaxInput);
                                    setShowBrandSearch(false);
                                    setShowMinInput(false);
                                }}
                                onMouseEnter={() => {
                                    setShowBrandSearch(false);
                                    setShowMinInput(false);
                                    setShowMaxInput(true);
                                }}
                            >
                                <span className="">Max Price</span>
                                <RiArrowDropDownLine className="text-2xl mx-1" />
                            </div>
                            {showMaxInput && <div className="absolute top-8 border border-sky-300/80 rounded-md">
                                <input
                                    type="number"
                                    name="maxPrice"
                                    className="outline-none rounded-full px-2"
                                    value={filter.maxPrice}
                                    onChange={handleFilterUpdate}
                                />
                            </div>}
                        </div>
                    </div>
                    <div className="text-[15px] text-gray-700/90 cursor-pointer flex items-center text-blue-500 transition ease-in-out duration-300 transform hover:scale-110"
                        onClick={handleClearFilters}
                    >
                        Clear all <GiReturnArrow className="mx-1 mt-1" />
                    </div>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Display filtered products */}
                {filterProduct.length ? (
                    filterProduct.map((product) => (
                        <div key={product._id} className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="text-gray-800 font-bold">${product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center my-auto">No products found</div>
                )}
            </div>
        </div>
    );
}
