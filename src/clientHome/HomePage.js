import home from './home.svg'
import {Link} from "react-router-dom";
const HomePage = ()=>{

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m5">
                    <p className='flow-text center-align'>
                        Log it in... Set it up... Ride along!!
                    </p>
                    <h3 className="center-align">
                        <strong>
                            <span className='companyName blue-text text-darken-2'>Tutembelee </span>
                            leo... we have got you covered</strong>
                    </h3>
                </div>
                <div className="col s12 m6">
                    <img src={home}  alt="logo" />
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="row">
                        <h4 className="center-align">Search for a ride</h4>
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input type="text" id="from"/>
                                <label htmlFor="from">From:</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="date"/>
                                <label htmlFor="from">date:</label>
                            </div>

                        </div>
                        <div className="col s12 m6">
                            <div className={"input-field"}>
                                <input type="text" id="to" />
                                <label htmlFor="to">To:</label>
                            </div>
                            <div >
                                <Link to="/lookup">
                                    <button className="btn pulse colo blue waves-effect waves-light darken-2">lets go</button>
                                </Link>

                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HomePage
