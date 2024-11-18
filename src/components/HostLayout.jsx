import { NavLink,Outlet } from "react-router-dom"

const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
export default function HostLayout () {
    return (
        <>
            <nav className="host-nav">
                <NavLink style={({isActive}) => isActive ? activeStyles : null } end to=".">Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null } to="income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null } to="vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null } to="reviews">Reviews</NavLink>

            </nav>
            <Outlet/>
        </>
    )
} 