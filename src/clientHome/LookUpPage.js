import VehicleCard from "../Vehicle/VehicleCard";
const LookUpPage = ()=>{

    return (
        <div>
            <h4 className="center-align">Choose a company to proceed to seat selection</h4>
            <div className="container">
                <div className="row">
                    <div className="col s12 m3">
                        <VehicleCard/>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default LookUpPage
