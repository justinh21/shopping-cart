import Image from "next/image"
import Link from "next/link"

export type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    title: string
}

export default function ProductCard({product}: {product: Product}) {

    return (
        <Link href={`/shop/product/${product.id}`} className="flex flex-col bg-white w-[144px] p-[12px] m-[12px] rounded-[12px] drop-shadow-lg hover:scale-105">
            <div className="flex items-center justify-center h-[196px]">
                <Image
                    src={product.image}
                    height={196}
                    width={100}
                    alt={product.title}
                />
            </div>
            <div className="text-[12px] font-bold pb-[4px]">
                {product.title}
            </div>
            <div className="text-[12px]">
                ${product.price}
            </div>
        </Link>
    )
}