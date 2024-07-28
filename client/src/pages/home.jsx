import HeroBanner from "../components/home/HeroBanner"
import TodaySales from "../components/home/TodaySales"
import ProdByCategory from "../components/home/ProdByCategory"
import BestSellingProducts from "../components/home/BestSellingProds"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home () {
    const [ products, setProducts ] = useState( [] );

    const getAllProd = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/products`, {
                withCredentials: true,
            } );
            setProducts( response.data );
            // console.log( response.data )
        } catch ( error ) {
            console.error( "Error fetching products:", error );
        }
    };

    useEffect( () => {
        getAllProd();
    }, [] );

    return (
        <div className="w-full bg-slate-200">
            <HeroBanner />
            <TodaySales products= {products}/>
            <ProdByCategory />
            <BestSellingProducts products= {products}/>
        </div>
    )
}
