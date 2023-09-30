import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex items-center justify-between w-full h-20 sticky top-0 bg-white border-b-4 z-50">
            <Link href="/">
            <Image
                src="/dog.jpg"
                width={80}
                height={160}
                alt="Logo"
                className="p-4"
            />
            </Link>
            <ul className="flex gap-10 pr-10">
                <li>Text</li>
                <li>Text2</li>
                <li>Text3</li>
            </ul>
        </div>
    )
}