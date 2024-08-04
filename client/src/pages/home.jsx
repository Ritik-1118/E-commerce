import HeroBanner from "../components/home/HeroBanner"
import TodaySales from "../components/home/TodaySales"
import ProdByCategory from "../components/home/ProdByCategory"
import BestSellingProducts from "../components/home/BestSellingProds"
import Loader from "../components/Loader"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home () {
    const [ products, setProducts ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getAllProd = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/products`, {
                withCredentials: true,
            } );
            setProducts( response.data );
            setIsLoading( false );
            // console.log( response.data )
        } catch ( error ) {
            console.error( "Error fetching products:", error );
            setIsLoading( false );
        }
    };

    useEffect( () => {
        getAllProd();
    }, [] );

    return (
        <div className="w-full bg-slate-200">
            <HeroBanner />
            {isLoading ? (<Loader />) : (<TodaySales products= {products}/>)}
            <ProdByCategory />
            {isLoading ? (<Loader />) : (<BestSellingProducts products= {products}/>)}
        </div>
    )
}
