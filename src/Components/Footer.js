import { Link } from 'react-router-dom';
import fb from '../ui/facebook.png';
import ln from '../ui/linkedin.png';
import gh from '../ui/github-sign.png';
import icon from '../ui/placeholder2.png';

const Footer = () => (
  <footer className="main-foot bg-white">
    <div>
      <Link to="/" className="d-flex flex-column align-items-center">
        <img src={icon} width="75" alt="icon" className="header-icon" />
        <h3 className="text-dark">Neko Shelter</h3>
      </Link>
    </div>
    <div className="footer-icons">
      <a rel="noreferrer" href="https://www.facebook.com/AliZien1999/" target="_blank" className="mx-3 my-3"><img src={fb} alt="fb" /></a>
      <a rel="noreferrer" href="https://www.linkedin.com/in/abdoamin/" target="_blank" className="mx-3 my-3"><img src={ln} alt="ln" /></a>
      <a rel="noreferrer" href="https://github.com/AbdelrhmanAmin" target="_blank" className="mx-3 my-3"><img src={gh} alt="gh" /></a>
    </div>
    <h3 className="text-center">@Abdelrhman Amin</h3>
  </footer>
);
export default Footer;
