import { ArrowDownIcon } from "../../../icons"
import Inspirations from "../../../pages/inspirations/Inspirations"
import Products from "../../../pages/products/Products"
import Rooms from "../../../pages/rooms/Rooms"

const routes = [{
    id: 0,
    name: 'Products',
    route: <Products />
}, {
    id: 1,
    name: 'Rooms',
    route: <Rooms />
}, {
    id: 2,
    name: 'Inspirations',
    route: <Inspirations />
}]
const Navbar = () => {
    return (
        <div className="bg-[#FCF8F3] container w-full px-4 mx-auto flex justify-between items-center gap-6">
                {routes.map((e) => {
                    return (
                        <button
                            key={e.id}
                            className="flex justify-center items-center gap-1">
                            <div> <p className="text-[16px] font-medium text-[#3A3A3A]">{e?.name}</p></div>
                            <div> <ArrowDownIcon /> </div>
                        </button>
                    )
                })}
        </div>
    )
}
export default Navbar 