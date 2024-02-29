import { ArrowRightIcon, OrangeChervonLeftIcon, WhiteChrevonRightIcon } from "../../../../icons/svg"

const Slider1 = () => {
   
    return (
        <div className="relative py-10 container px-[106px] mx-auto w-full bg-[url('./assets/images/high-quality-furniture-just-for-you.jpg')] 
        flex justify-center" >
            <div className="w-full flex justify-start" >
                <div className=" bg-[rgba(255,255,255,0.72)] container px-12 py-12 w-full max-w-[494px] flex flex-col gap-4" >
                    <div className="w-full ">
                        <p className="text-[#3A3A3A] font-bold text-[56px]">High-Quality
                            Furniture Just
                            For You </p></div>
                    <div> <p className="text-[#898989] font-medium text-[20px]">Our furniture is made from selected and best quality materials that are suitable for your dream home</p> </div>
                    <div className="w-full">
                        <button className="bg-[#E89F71] w-full py-6">
                            <p className="text-center text-white font-semibold text-[20px]"> Shop Now</p> </button></div>
                </div>
            </div>
            <div className="w-full grid justify-items-end items-end" >
                <div className="w-full max-w-[294px] py-4 bg-[rgba(255,255,255,0.72)] flex justify-around items-end">
                    <div className="flex flex-col gap-2">
                        <div><p className="text-[#3A3A3A] font-semibold text-[28px]"> Bohauss</p></div>
                        <div><p className="text-[#616161] font-medium text-[16px]">Luxury big sofa 2-seat </p></div>
                        <div><p className="text-[#3A3A3A] font-semibold text-[20px]">Rp 17.000.000</p></div>
                    </div>
                    <div className=""> <button><ArrowRightIcon /> </button></div>
                </div>
            </div>

        </div>
    )
}
export default Slider1