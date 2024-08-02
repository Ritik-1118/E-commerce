import { useEffect, useState } from "react"

export default function Products () {
    const [ allProducts, setAllProducts ] = useState( [] );
    const [ filterProduct, setFilterProduct ] = useState( [] );
    const [filter,setFilter] = useState({
        category:"",
        brand:"",
        minPrice:null,
        maxPrice:null
    });

    const fetchAllProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/products',{
                method: "GET",
                credentials: "include",
            });

            if(response.ok){
                const productsData = await response.json();
                setAllProducts(productsData);
                // console.log("products",allProducts);
            }
        } catch (error) {
            console.error("Failed to fatch All products ",error);
        }
    }
    const fetchProductsByFilter = async () => { 
        try {
            const params = new URLSearchParams();
            if (filter.minPrice !== null || "") params.append("minPrice", filter.minPrice);
            if (filter.maxPrice !== null || "") params.append("maxPrice", filter.maxPrice);
            if (filter.category !== null || "") params.append("category", filter.category);
            if (filter.brand !== null || "") params.append("brand", filter.brand);

            const apiUrl = `http://localhost:8000/api/products/getByFilter/?${params.toString()}`;
            const response = await fetch(apiUrl,{
                method: "GET",
                credentials: "include",
            });

            if(response.ok){
                const filterData = await response.json();
                setFilterProduct(filterData);
                // console.log("products",filterData);
            }
        } catch (error) {
            console.error("Failed to fatch All products ",error);
        }
    }
    useEffect(()=>{
        fetchAllProducts();
        fetchProductsByFilter();
    },[]);
    return (
        <div>
            hello
        </div>
    )
}
