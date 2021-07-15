// import react from 'React';

// interface IFooter {
//     options: string[]
// }
import navStyles from "./navbar.module.scss";
import OctagonLogo from "./../../assets/Logo/Octagon-logo-poppins-1000BA.svg";

const Navbar = ():JSX.Element => {
    return (<>
        <header className={navStyles.container}>
            <div className={navStyles.logo}>
                <OctagonLogo/>
            </div>
            <div className={navStyles.buttons}>
                <ul>
                    <li className={navStyles.navigators}>Home</li>
                    <li className={navStyles.navigators}>Events</li>
                    <li className={navStyles.navigators}>About</li>
                </ul>
                <button className={navStyles.contactButton}>Contact</button>
            </div>
        </header>
    </>)
}

export default Navbar;