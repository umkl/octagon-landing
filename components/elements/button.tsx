import React, { ReactNode } from "react";
import SuperEllipse from "react-superellipse";
import utilstyles from "./../../styles/utils.module.scss";
import styles from "./button.module.scss";
interface Props {
  dark: boolean;
  children: ReactNode;
  width?: number;
  height?: number;
  fontsize?: string;
}


function Button({ dark, children, width, height, fontsize }: Props) {
  return (
    <div>
      <div
        className={styles.shadow}
        style={{
          height: height == undefined ? "40px" : height + "px",
          width: width == undefined ? "150px" : width + "px",
        }}
      />
      <SuperEllipse
        r1={0.001}
        r2={0.8}
        style={{
          height: height == undefined ? "40px" : height + "px",
          width: width == undefined ? "150px" : width + "px",
          backgroundColor: dark ? utilstyles.drk_color : utilstyles.pr_color,
          boxShadow: "0px 0px 10px 10px black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className={styles.text} style={{ fontSize: fontsize ?? "20px" }}>
          {children}
        </p>
      </SuperEllipse>
    </div>
  );
}

export default Button;