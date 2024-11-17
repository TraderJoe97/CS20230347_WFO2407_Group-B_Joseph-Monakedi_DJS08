import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const params = useParams();
    useEffect(() => {
        fetch(`/api/vans/${params.VanId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [params.VanId])

    return (
        <div>
            <h1>Van detail page goes here</h1>
        </div>
    );
}