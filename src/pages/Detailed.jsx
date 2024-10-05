import { useLocation } from "react-router-dom"

function Detailed(){
    const location = useLocation();
    const data = location.state || {};

    return (
        <div className="detailed-container">
            <div className="details">
            <p>Name - {data.name}</p>
            <p>Username - {data.username}</p>
            <p>Email - {data.email}</p>
            <p>Phone no. - {data.phone}</p>
            <p>City - {data.address.city}</p>
            {data.company.name ? <p>Company - {data.company.name}</p> : null}
            {data.website ? <p>Website - {data.website}</p> : null}
            </div>
        </div>
    )
}

export default Detailed