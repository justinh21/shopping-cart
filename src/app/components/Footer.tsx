import Image from "next/image"

export default function Footer() {
    return (
        <div className="flex items-center justify-between w-full h-14 bg-white border-t-4">
            <Image
                src="/dog.jpg"
                width={60}
                height={120}
                alt="Logo"
                className="p-4"
            />
        </div>
    )
}