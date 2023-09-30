"use client"
import Link from "next/link";
import useSWR from "swr";
import LoadingFeaturedProducts from "../components/LoadingFeaturedProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Product } from "../components/ProductCard";

export default function Shop() {
    const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then((res) => res.json());

    const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products", fetcher)

    return (
        <>
        <div className="flex flex-col items-stretch">
            <div className="text-[24px] font-bold text-center mt-[32px]">
                Shop
            </div>
            <div className="flex flex-col items-center py-[32px] px-[10vw]">
                {error ? (
                    <div>Failed to load...</div>
                ): (
                    null
                )}
                {isLoading ? (
                    // <div>Loading...</div>
                    <div className="flex flex-wrap justify-center my-[32px]">
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                        <LoadingFeaturedProducts/>
                    </div>                  
                ): (
                    <div className="flex flex-wrap justify-center my-[32px]">
                    {
                        data.map((product: Product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                    </div>
                )}
            </div>
        </div>
        </>
    )
}