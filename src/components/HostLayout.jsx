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
                <NavLink style={({isActive}) => isActive ? activeStyles : null } end to="/host/income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null } to="/host/reviews">Reviews</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles : null } to="/host">Dashboard</NavLink>
            </nav>
            <Outlet/>
        </>
    )
} 