import footerStyle from "./footer.module.scss";
import SuperEllipse from "react-superellipse";
import OctagonLogo from "./../../assets/Logo/Octagon-logo-grayed.svg";

const footer = (): JSX.Element => {
  return (
    <footer className={footerStyle.container}>
      <div className={footerStyle.innerContainer}>
        <SuperEllipse
          r1={0.00006}
          r2={0.132}
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          <div className={footerStyle.content}>
            <h3 className={footerStyle.blockheading}>Contact</h3>
            <div className={footerStyle.block1}>
              <div className={footerStyle.half}>
                <p>E: office@octagon.at</p>
                <p>T: +43 123 456789</p>
              </div>
              <div className={footerStyle.half}>
                <p>Loremstreet 1</p>
                <p>1010 Vienna, Austria</p>
              </div>
            </div>
            <h3 className={footerStyle.blockheading}>Opening Times</h3>
            <div className={footerStyle.block2}>
              <p>SUN - THU : 4 pm - 10.30 pm </p>
              <p>FRI - SAT : 4 pm - 11.00 pm</p>
            </div>
            <h3 className={footerStyle.blockheading}>
              Follow us on Social Media
            </h3>
            <div className={footerStyle.block3}>
              <div className={footerStyle.half}>
                <p>Instagram</p>
                <p>Dribbble</p>
              </div>
              <div className={footerStyle.half}>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
            </div>
            <div className={footerStyle.bottom}>
              <div className={footerStyle.wrap}>
                <div className={footerStyle.logo}>
                  <OctagonLogo />
                </div>
                <span>
                  © 2021 ungarmichael
                  <br />
                  Made with {"<3"} in Austria
                </span>
              </div>
              <div >
                <ul className={footerStyle.privacy}>
                  <li>
                    <a>Imprint</a>
                  </li>
                  <li>
                    <a>Privacy & Cookie policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SuperEllipse>
      </div>

      {/* <div
      style={{
        width: 200,
        height: 200,
        clipPath: `path('${svgPath}')`,
      }}
    >
      ...
    </div> */}
      {/* <div className={footerStyle.innerContainer}>
            </div> */}
      {/* <SquircleView
            squircleParams={{
                cornerSmoothing: 0.7,
                cornerRadius: 30,
                fillColor: 'pink',
            }}
            children={{width: 200, height: 200}}
            ></SquircleView> */}
    </footer>
  );
};

export default footer;
