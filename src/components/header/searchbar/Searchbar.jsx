import React from "react";
import { SearchIcon } from "../../../icons";

const Searchbar = () => {
    return (
        <div className="container px-0 w-full mx-auto bg-white flex justify-center items-center">
            <div className="p-2"> <SearchIcon className="w-full" /></div>
            <div className="w-full py-2">
                <input type="text"
                    placeholder="Search for minimalist chair "
                    className="focus:outline-none w-full text-[14px] font-normal text-[#616161]" />
            </div>
        </div>
    )
}
export default Searchbar