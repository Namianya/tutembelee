const Navbar =()=>{
    return(
        <nav className="z-depth-0 white black-text">
            <div className="nav-wrapper ">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="brand-logo blue-text text-darken-2"><strong>Tutembelee</strong></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <button className="btn  colo blue waves-effect waves-light"><strong>LOGIN</strong></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
