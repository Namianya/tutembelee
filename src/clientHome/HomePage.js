import {Link} from "react-router-dom";
import {Component} from 'react'
import $ from 'jquery'
class HomePage extends Component {
    componentDidMount(){
        $(document).ready(function(){
            $('.datepicker').datepicker();
        });
    }
    render (){
       return (
           <div className={'homepage'}>
               <div className="container">
                   <div className="row">
                       <div className="col s12 m5">
                           <div className="card">
                               <div className="card-content">
                                   <div className="row">
                                       <div className="col s12 ">
                                           <div className="row">
                                               <h4 className="center-align">Search for a ride</h4>
                                               <div className="col s12">
                                                   <div className="input-field">
                                                       <input type="text" id="from"/>
                                                       <label htmlFor="from">From:</label>
                                                   </div>
                                                   <div className="input-field">
                                                       <input type="datepicker" id="date"/>
                                                       <label htmlFor="from">date:</label>
                                                   </div>

                                               </div>
                                               <div className="col s12 ">
                                                   <div className={"input-field"}>
                                                       <input type="text" id="to" />
                                                       <label htmlFor="to">To:</label>
                                                   </div>
                                                   <div >
                                                       <Link to="/lookup">
                                                           <button className="btn blue blue pulse darken-2">lets go</button>
                                                       </Link>

                                                   </div>
                                               </div>
                                           </div>

                                       </div>
                                   </div>
                               </div>
                           </div>

                       </div>
                       <div className="col l6 center-align">
                           <p className='flow-text white-text'>
                               Log it in... Set it up... Ride along!!
                           </p>
                           <h3 className={'white-text'}>
                               <strong>
                                   <span className='companyName blue-text text-darken-2'>Tutembelee </span>
                                   leo... we have got you covered</strong>
                           </h3>


                       </div>
                   </div>
               </div>
           </div>
        )
    }
}
export default HomePage
