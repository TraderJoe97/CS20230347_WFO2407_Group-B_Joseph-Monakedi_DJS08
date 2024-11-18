import { useState, useEffect } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";



export default function HostVanDetail() {
    const params = useParams();
    const [currentVan, setCurrentVan] = useState(null);
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }
    )
    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVan.type}`}
                    >
                        {currentVan.type}
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                </div>
            </div>
            <nav className="host-van-detail-nav">
                <NavLink 
                to="."
                end
                className={`host-van-detail-link ${({ isActive }) => (isActive ? "active" : null)}`}
                >
                    Detail
                </NavLink>
                <NavLink 
                to="."
                className={`host-van-detail-link ${({ isActive }) => (isActive ? "active" : null)}`}
                >
                    Pricing
                </NavLink>
                <NavLink 
                to="."
                className={`host-van-detail-link ${({ isActive }) => (isActive ? "active" : null)}`}
                >
                    Photos
                </NavLink>
            </nav>
            <Outlet />
        </div>
    </section>
    )
}