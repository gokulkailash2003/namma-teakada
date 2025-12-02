import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const menuStructure = {
  services: [
    {
      title: "Wedding Photography",
      submenu: [
        "Haldi Ceremony",
        "Mehandi Ceremony",
        "Sangeet Ceremony",
        
      ]
    },
    "Birthday events",
    "Puberty events",
    "Corporate events",
    "Baby Photoshoot",
    "Model photoshoot",
    "Product photoshoot",
    "Ad Shoot",
    "Advertisement"
    
  ]
};

function Header() {
  const navigate = useNavigate();
  // Helper to navigate to portfolio with service info
  const goToPortfolioService = (service) => {
    navigate('/portfolio', { state: { service } });
  };
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src="/assets/images/IMG_0650.PNG" alt="logo" />
        <h2><a href='/' style={{color: "hsl(38, 100%, 50%)", textDecoration: "none"}}>NAMMA TEAKADA</a></h2>
      </div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <div className="nav-dropdown">
          <span className="dropdown-toggle">
            <span>
              Services <span className="menu-arrow"></span>
            </span>
          </span>
          <ul className="dropdown-menu">
            <li className="dropdown-item has-submenu">
              <span onClick={() => goToPortfolioService('Wedding Photography')} style={{cursor:'pointer'}}>
                <span>
                  Wedding Photography <span className="submenu-arrow"></span>
                </span>
              </span>
              <ul className="submenu">
                <li><span onClick={() => goToPortfolioService('Haldi Ceremony')} style={{cursor:'pointer'}}>Haldi Ceremony</span></li>
                <li><span onClick={() => goToPortfolioService('Mehandi Ceremony')} style={{cursor:'pointer'}}>Mehandi Ceremony</span></li>
                <li><span onClick={() => goToPortfolioService('Sangeet Ceremony')} style={{cursor:'pointer'}}>Sangeet Ceremony</span></li>
              </ul>
            </li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Birthday events')} style={{cursor:'pointer'}}>Birthday events</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Puberty events')} style={{cursor:'pointer'}}>Puberty events</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Corporate events')} style={{cursor:'pointer'}}>Corporate events</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Baby Photoshoot')} style={{cursor:'pointer'}}>Baby Photoshoot</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Model photoshoot')} style={{cursor:'pointer'}}>Model photoshoot</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Product photoshoot')} style={{cursor:'pointer'}}>Product photoshoot</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Ad Shoot')} style={{cursor:'pointer'}}>Ad Shoot</span></li>
            <li className="dropdown-item"><span onClick={() => goToPortfolioService('Advertisement')} style={{cursor:'pointer'}}>Advertisement</span></li>
          </ul>
        </div>
        <Link to="/academics">Academics</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
