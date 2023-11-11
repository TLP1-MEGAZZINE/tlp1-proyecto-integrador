import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light colorPrincipal">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="job-unite-logo" width="30" height="30"/>
                        <a className="navbar-brand text-light" href="/index">Job <span className="unite">Unite</span></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
