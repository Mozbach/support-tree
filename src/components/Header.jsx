import kwebeamsLogoWhite from '../assets/kwebeams-logo-white.png';

function Header() {
  return (
    <>
        <header className="navHeader">
            <img src={kwebeamsLogoWhite} alt="KwêBeams Logo" className="navLogo" />
            {/* <nav className="mainNav">
                    <a href="#" className="mainNavAnchor"> Link 1</a>
                    <a href="#" className="mainNavAnchor"> Link 2</a>
                    <a href="#" className="mainNavAnchor"> Link 3</a>
                    <a href="#" className="mainNavAnchor"> Link 4</a>
            </nav> */}
            <h1 className="troubleShootingH1">Troubleshooting</h1>
        </header>
    </>
  )
}

export default Header