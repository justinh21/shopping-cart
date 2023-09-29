"use client";
import Link from "next/link"
import ProductCard from "./ProductCard";
import useSWR, { Fetcher } from "swr"

export default function Home() {
    const fetcher = (...args) => fetch (...args).then((res) => res.json());

    const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products?limit=6", fetcher)

    return (
        <div className="flex flex-col items-stretch">
            <div className="flex flex-col items-center bg-white py-[64px] px-[10vw]">
                <div className="text-[36px] font-bold text-center">
                    Your one-stop destination for all your shopping needs
                </div>
                <div className="text-[16px] mt-[8px] text-center">
                    Discover an unparalleled shopping experience with our extensive selection of products,
                    unbeatable prices, and exceptional customer service. Shop now and transform your 
                    shopping journey with us.
                </div>
                <Link href="/shop" className="my-[24px] text-white font-bold bg-black rounded-md py-[8px] px-[32px]">
                    Shop now
                </Link>
            </div>
            <div className="flex flex-col items-center py-[32px] px-[10vw] bg-slate-100">
                <div className="text-[24px] font-bold text-center">
                    Featured Items
                </div>
                {error ? (
                    <div>Failed to load...</div>
                ): (
                    null
                )}
                {isLoading ? (
                    <div>Loading...</div>
                ): (
                    <div className="flex flex-wrap justify-center my-[32px]">
                    {
                        data.map((product) => (
                            <ProductCard product={product}/>
                        ))
                    }
                    </div>
                )}
            </div>
        </div>
    )
}