// import react from 'React';

// interface IFooter {
//     options: string[]
// }
import navStyles from "./navbar.module.scss";
import utilStyles from "./../../styles/utils.module.scss";
import OctagonLogo from "./../../assets/Logo/Octagon-logo-poppins-1000BA.svg";


import useWindowSize, { Size } from "../../hooks/useWindowSize";
// import styleVariables from './../../styles/abstracts/_include-media.scss';

const Navbar = (): JSX.Element => {
  const size: Size = useWindowSize();
  return (
    <>
      <header className={navStyles.container}>
        <div className={navStyles.logo}>
          <OctagonLogo />
        </div>
        <div className={navStyles.navigator}>            
          {size.width > parseInt(utilStyles.tabletsize) ? (
            <div className={navStyles.wrapper}>
              <ul>
                <li className={navStyles.pagenavigators}>Home</li>
                <li className={navStyles.pagenavigators}>Events</li>
                <li className={navStyles.pagenavigators}>About</li>
              </ul>
              <button className={navStyles.contact}>Contact</button>
            </div>
          ) : (
            <div>
                ok
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
