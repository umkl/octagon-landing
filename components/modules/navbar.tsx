// import react from 'React';

// interface IFooter {
//     options: string[]
// }
import navStyles from "./navbar.module.scss";
import OctagonLogo from "./../../assets/Logo/Octagon-logo-poppins-1000BA.svg";

import useWindowSize, { Size } from "../../hooks/useWindowSize";

const Navbar = (): JSX.Element => {
  const size: Size = useWindowSize();

  return (
    <>
      <header className={navStyles.container}>
        <div className={navStyles.logo}>
          <OctagonLogo />
        </div>
        <div className={navStyles.navigator}>
          {size.width > 400 ? (
            <div className={navStyles.buttonlist}>
              <ul>
                <li className={navStyles.navigators}>Home</li>
                <li className={navStyles.navigators}>Events</li>
                <li className={navStyles.navigators}>About</li>
              </ul>
              <button className={navStyles.contactButton}>Contact</button>
            </div>
          ) : (
            <div>
                {console.log("ok!")}
                ok
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
