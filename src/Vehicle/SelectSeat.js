import SeatLayout from "./SeatLayout";
import SeatCart from "./SeatCart";

const SelectSeat =() => {
    return(
        <div className='container'>
            <h4 className="center-align">Select seat</h4>
            <div className="row">
                <div className="col s12 m6">
                    <SeatLayout/>
                </div>
                <div className="col s12 m6">
                    <SeatCart/>
                </div>
            </div>
        </div>
    )
}
export default SelectSeat
