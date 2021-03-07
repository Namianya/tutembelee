const Navbar =()=>{
    return(
        <nav>
            <div className="nav-wrapper blue">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={"brand-logo right darken-2"}>Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {/*<li><a href="sass.html">Sass</a></li>*/}
                    {/*<li><a href="badges.html">Components</a></li>*/}
                    {/*<li><a href="collapsible.html">JavaScript</a></li>*/}
                </ul>
            </div>
        </nav>

    )
}
export default Navbar
