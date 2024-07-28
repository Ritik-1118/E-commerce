import HeroBanner from "../components/home/HeroBanner"
import TodaySales from "../components/home/TodaySales"
import ProdByCategory from "../components/home/ProdByCategory"
import BestSellingProducts from "../components/home/BestSellingProds"

export default function Home () {
    return (
        <div className="w-full bg-slate-200">
            <HeroBanner />
            <TodaySales />
            <ProdByCategory />
            <BestSellingProducts />
        </div>
    )
}
