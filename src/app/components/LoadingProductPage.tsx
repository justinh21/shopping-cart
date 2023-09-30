export default function LoadingProductPage() {
    return (
        // <div className="flex flex-col bg-white w-[144px] p-[12px] m-[12px] rounded-[12px] drop-shadow-lg hover:scale-105 animate-pulse">
        //     <div className="flex items-center justify-center h-[196px] bg-slate-200 rounded-lg">
        //     </div>
        //     <div className="text-[12px] font-bold pb-[4px] mt-[16px] h-8 bg-slate-200 rounded">
        //     </div>
        //     <div className="text-[12px] bg-slate-200 my-[16px] h-2 rounded">
        //     </div>
        // </div>

        <div className="flex items-stretch justify-center animate-pulse">
            <div className="mx-[64px] w-[244px] h-[380px] bg-slate-200 border-4 rounded-lg p-[48px]">
            </div>
            <div className="flex flex-col justify-between items-start">
                <div>
                    <div className="text-[18px] w-72 h-4 bg-slate-200 rounded font-bold pb-[4px]">
                    </div>
                    <div className="text-[18px] h-4 bg-slate-200 rounded mt-[16px]">
                    </div>
                </div>
                <div className="border-4 px-[48px] py-[16px] rounded-lg">
                </div>
            </div>
        </div>
    )
}