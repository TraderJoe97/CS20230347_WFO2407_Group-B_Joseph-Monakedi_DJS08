import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
    const params = useParams();
    const [currentVan, setCurrentVan] = useState(null);
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }
    )
    return (
        <>{currentVan ? <h1>{currentVan.name}</h1> : <h1>Loading...</h1>}</>
    )
}