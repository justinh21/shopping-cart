"use client";
import useSWR from "swr";
import Image from "next/image";
import { Product } from "@/app/components/ProductCard";
import LoadingProductPage from "@/app/components/LoadingProductPage";

export default function Page({params}: {params: {slug: string}}) {
    const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then((res) => res.json());

    const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${params.slug}`, fetcher)

    console.log(data)

    return (
        <div>
        {error ? (
            <div>Failed to load...</div>
        ): (
            null
        )}
        {isLoading ? (
            <div className="flex flex-wrap justify-center my-[32px]">
                <LoadingProductPage/>
            </div>                  
        ): (
        <div className="flex items-stretch justify-center">
            <div className="mx-[64px] border-4 rounded-lg p-[48px]">
            <Image
                src={data.image}
                height={196}
                width={196}
                alt={data.title}
            />
            </div>
            <div className="flex flex-col justify-between items-start">
                <div>
                    <div className="text-[18px] font-bold pb-[4px]">
                        {data.title}
                    </div>
                    <div className="text-[18px] mt-[16px]">
                        ${data.price}
                    </div>
                </div>
                <button className="border-4 px-[32px] py-[8px] rounded-lg">
                    Buy
                </button>
            </div>
        </div>
        )}
        </div>
    )
}