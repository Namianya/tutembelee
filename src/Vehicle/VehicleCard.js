import {Link} from "react-router-dom";

const VehicleCard =()=>{
    return(
        <Link to="/company/matatu">
            <div className="card">
                <div className="card-image">
                    {/*<img src={Canva} alt=""/>*/}
                </div>
                <div className="card-content">
                    <p className="card-title">Matatu</p>
                </div>
            </div>
        </Link>
    )
}
export default VehicleCard
