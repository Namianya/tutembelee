const SeatLayout =()=>{
    return(
        <div className='z-depth-1'>
            <div className="container">
                <h5 className='center-align'>11 seater</h5>
                <div className="center-align">
                    <h6>key</h6>
                    <div className='row'>
                        <div className="col s4">
                            <label htmlFor='open'><p>open</p></label>
                            <i className='material-icons' id='open'>check_box_outline_blank</i>
                        </div>
                        <div className="col s4">
                            <label htmlFor='booked'><p>Booked</p></label>
                            <i className='material-icons' id='Booked'>check_box</i>
                        </div>
                       <div className="col s4">
                           <label htmlFor='selected'><p>selected</p></label>
                           <i className='material-icons' id='selected'>indeterminate_check_box</i>
                       </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                            <div className="container">
                                <i className='material-icons' id='open'>check_box_outline_blank</i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default SeatLayout
