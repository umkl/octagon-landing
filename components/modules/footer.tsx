import footerStyle from "./footer.module.scss";
// import { SquircleView } from 'react-native-figma-squircle'
// import { getSvgPath } from "figma-squircle";
import SuperEllipse from "react-superellipse";

// const svgPath = getSvgPath({
//     width: 200,
//     height: 200,
//     cornerRadius: 24,
//     cornerSmoothing: 0.8, // cornerSmoothing goes from 0 to 1
//   });

// function PinkSquircle() {
//     return (
//       <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
//         <path d={svgPath} fill="pink" />
//       </svg>
//     )
//   }

const footer = (): JSX.Element => {
  

  return (
    <footer className={footerStyle.container}>
        <div className={footerStyle.innerContainer}>
            <SuperEllipse r1={0.0586} r2={0.332} style={{width: "100%", height: "100%", backgroundColor: "white"}}>
                children
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
