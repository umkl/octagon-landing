import navStyles from "./navbar.module.scss";
import utilStyles from "./../../styles/utils.module.scss";
import OctagonLogo from "./../../assets/Logo/Octagon-logo-poppins-1000BA.svg";
import SmallOctagonLogo from "./../../assets/Logo/Octagon-logo-1000BA.svg";
import Menu from "./../../assets/Icons/Menu.svg";
import Menu_Dark from "./../../assets/Icons/Menu-dark.svg";
import Link from "next/link";
import { useSpring, animated as a } from "react-spring";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import { useContext, useEffect, useRef, useState } from "react";
import useResizeObserver from './../../hooks/useObserver';
import {NavbarHeightContext} from './../layouts/layout';


interface ILayout {
  dark?: boolean;
}

const Navbar = ({ dark }: ILayout): JSX.Element => {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const navRef = useRef(null);

  const {NavbarHeight,setNavbarHeight} = useContext(NavbarHeightContext);

  const heightCallback = () => {
    try{
      setNavbarHeight(navRef.current.clientHeight);
    }catch(e){
      console.log("null error");
    }
  }
  useResizeObserver({callback: heightCallback, element: navRef});
  useEffect(() => {
    setLoaded(true);
  }, []);

  const contactSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100,
  });

  const [, setY] = useSpring(() => ({ y: 0 }));

  const size: Size = useWindowSize();

  const scrollAction = (props): void => {
    return window.scroll(500, props.y);
  };

  return (
    <div className="navbar" ref={navRef}>
      {size.width > parseInt(utilStyles.tabletsize)-100 ? (
        <header className={navStyles.container}>
          <>
            <div className={navStyles.logo}>
              <OctagonLogo />
            </div>
            <div className={navStyles.navigator}>
              <div className={navStyles.wrapper}>
                <ul>
                  <Link href="/">
                    <a>
                      <li className={navStyles.pagenavigators}>Home</li>
                    </a>
                  </Link>
                  <Link href="/Events">
                    <a>
                      <li className={navStyles.pagenavigators}>Events</li>
                    </a>
                  </Link>
                  <Link href="/About">
                    <a>
                      <li className={navStyles.pagenavigators}>About</li>
                    </a>
                  </Link>
                </ul>
                <div
                  className={navStyles.contact}
                  style={contactSpring}
                  onClick={() => {
                    setY({
                      y: 500,
                      reset: true,
                      from: { y: window.scrollY },
                    });
                  }}
                >
                  Contact
                </div>
              </div>
            </div>
          </>
        </header>
      ) : (
        <header className={navStyles.container_small}>
          <div className={navStyles.logo_small}>
            <SmallOctagonLogo />
          </div>
          <div className={navStyles.menuicon}>
            {!dark ? <Menu /> : <Menu_Dark />}
          </div>
        </header>
      )}
    </div>
  );
};

export default Navbar;
