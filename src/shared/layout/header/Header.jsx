import Navbar from "../../../components/header/navbar/Navbar"
import Profile from "../../../components/header/profile/Profile"
import Searchbar from "../../../components/header/searchbar/Searchbar"

const Header = () => {
    return (
        <div className="bg-[#FCF8F3] py-6">
            <div className="container w-full px-4 mx-auto flex justify-between items-center"> 
            <div> <p className="text-black text-[24px] font-bold"> Funiro.</p> </div>
            <div> <Navbar /> </div>
            <div className="w-full max-w-[473px]"> <Searchbar /></div>
                <div className=""> <Profile /> </div>
                </div>
        </div>
    )
}
export default Header       