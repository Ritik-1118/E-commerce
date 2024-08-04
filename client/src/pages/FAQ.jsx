import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "What is your return policy?",
        answer: "You can't return any item after purchase."
    },
    {
        question: "How do I track my order?",
        answer: "You can track your order using the tracking link sent to your email."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to select countries."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support via email at techbazzar@gmail.com or call us at (123) 456-7890."
    },
    {
        question: "Can I change my order after it has been placed?",
        answer: "Yes, you can change your order within 24 hours of placing it."
    }
];

const FAQ = () => {
    const [ activeIndex, setActiveIndex ] = useState( null );

    const toggleFAQ = ( index ) => {
        setActiveIndex( activeIndex === index ? null : index );
    };

    return (
        <div className="max-w-3xl mx-auto p-4 mt-36">
            <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
            { faqs.map( ( faq, index ) => (
                <div key={ index } className="mb-4">
                    <button
                        className="flex items-center justify-between w-full text-left p-4 bg-gray-200 hover:bg-gray-300 rounded-lg focus:outline-none"
                        onClick={ () => toggleFAQ( index ) }
                    >
                        <span className="font-semibold">{ faq.question }</span>
                        <FaChevronDown />
                    </button>
                    { activeIndex === index && (
                        <div className="p-4 bg-white border-t border-gray-300">
                            <p>{ faq.answer }</p>
                        </div>
                    ) }
                </div>
            ) ) }
        </div>
    );
};

export default FAQ;
