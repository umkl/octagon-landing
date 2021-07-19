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
import useResizeObserver from "./../../hooks/useObserver";
import { NavActiveContext, NavbarHeightContext } from "./../layouts/layout";
import SuperEllipse, { SuperEllipseImg } from "react-superellipse";
import { Link as Link2, animateScroll as scroll } from "react-scroll";
import Button from "./../elements/button";

interface ILayout {
  dark?: boolean;
}

const Navbar = ({ dark }: ILayout): JSX.Element => {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const size: Size = useWindowSize();
  const navRef = useRef(null);
  const FullNavbar: boolean =
    size.width > parseInt(utilStyles.tablet) - 100;

  const { NavbarHeight, setNavbarHeight } = useContext(NavbarHeightContext);
  const { NavActive: NavActive, setNavActive: setNavActive } = useContext(
    NavActiveContext
  );

  const styles = useSpring({ opacity: isLoaded ? 1 : 0 });

  const heightCallback = () => {
    try {
      setNavbarHeight(navRef.current.clientHeight);
    } catch (e) {
      console.log("null error");
    }
  };
  useResizeObserver({ callback: heightCallback, element: navRef });
  useEffect(() => {
    setLoaded(true);
  }, []);

  const contactSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100,
  });

  const [, setY] = useSpring(() => ({ y: 0 }));

  const scrollAction = (props): void => {
    return window.scroll(500, props.y);
  };

  const switchNavButtonActive = (): void => {
    setNavActive(!FullNavbar);
  };

  return (
    <>
      <div className="navbar" ref={navRef}>
        {FullNavbar ? (
          <header className={navStyles.container}>
            <>
              <div className={navStyles.logo}>
                <Link href="/">
                  <a>
                    <OctagonLogo />
                  </a>
                </Link>
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
                  <Link2
                    className={navStyles.contact}
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {/* <SuperEllipse
                      r1={0.03}
                      r2={0.5}
                      style={{
                        height: "40px",
                        width: "100px",
                        backgroundColor: navStyles.pr_color,
                        boxShadow: "0px 0px 10px 10px black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span>Contact</span>
                    </SuperEllipse> */}
                    <Button
                      dark={false}
                      fontsize="20px"
                      width={120}
                      height={40}
                    >
                      Contact
                    </Button>
                  </Link2>
                </div>
              </div>
            </>
          </header>
        ) : (
          <header className={navStyles.container_small}>
            <div className={navStyles.logo_small}>
              <Link href="/">
                <a>
                  <SmallOctagonLogo />
                </a>
              </Link>
            </div>
            <div
              className={navStyles.menuicon}
              onClick={() => switchNavButtonActive()}
            >
              {!dark ? <Menu /> : <Menu_Dark />}
            </div>
          </header>
        )}
      </div>
    </>
  );
};

export default Navbar;
