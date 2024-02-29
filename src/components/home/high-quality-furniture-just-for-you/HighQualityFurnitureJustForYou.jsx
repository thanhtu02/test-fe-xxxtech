import React, { useState } from "react";
import Slider1 from "./slider1/Slider1";
import { OrangeChervonLeftIcon, WhiteChrevonRightIcon } from "../../../icons";

const arraySliders = [{
    id: 0,
    component: <Slider1 />
},
{
    id: 1,
    component: "ảnh 2"
},
{
    id: 2,
    component: "ảnh 3"
},
{
    id: 3,
    component: "ảnh 4"
}
]

const HighQualityFurnitureJustForYou = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePreviousSlide = () => {

    }
    const handleNextSlide = () => {

    }
    // CONSOLE HERE
    console.log(currentIndex)

    return (
        <div className="bg-[#FCF8F3] w-full pb-12">
            <div className="container px-4 w-full mx-auto relative">
                {arraySliders.map((e, index) => {
                    return (
                        <div key={index}
                            className="w-full flex justify-center items-center ">
                            {currentIndex === index && <div className="w-full"> {e?.component} </div>}
                        </div>
                    )
                })}
                <div className="absolute top-[50%] left-[3%] -translate-y-1/2">
                    {currentIndex === 0 ? (
                        <div
                            className="bg-[#E89F71]/30 w-[48px] h-[45px] rounded-full flex justify-center items-center">
                            <OrangeChervonLeftIcon /> </div>)
                        : ( <button
                            onClick={handlePreviousSlide}
                            className="bg-[#E89F71]/30 w-[48px] h-[45px] rounded-full flex justify-center items-center">
                            <OrangeChervonLeftIcon /> </button>)}

                </div>
                <div className="absolute top-[50%] right-[3%] -translate-y-1/2">
                    <button
                        onClick={handleNextSlide}
                        className="bg-[#E89F71] w-[48px] h-[45px] rounded-full flex justify-center items-center">
                        <WhiteChrevonRightIcon /> </button>
                </div>
                <div className="absolute bottom-[2%] left-[50%] -translate-y-1/2 flex items-center justify-center gap-8" >
                    {arraySliders.map((e) => {
                        return (
                            <button
                                key={e?.id}
                                className="bg-[#D8D8D8] rounded-full w-[11px] h-[11px]" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default HighQualityFurnitureJustForYou