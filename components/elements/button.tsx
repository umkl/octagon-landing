import React, { ReactNode } from "react";
import SuperEllipse from "react-superellipse";
import utilstyles from "./../../styles/utils.module.scss";
import styles from "./button.module.scss";
interface Props {
  dark: boolean;
  children: ReactNode;
  width?: number;
}

function Button({ dark, children, width }: Props) {
  return (
    <div>
      <div className={styles.shadow} />

      <SuperEllipse
        r1={0.03}
        r2={0.5}
        style={{
          height: "40px",
          width: "160px",
          backgroundColor: dark ? utilstyles.drk_color : utilstyles.pr_color,
          boxShadow: "0px 0px 10px 10px black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className={styles.text}>{children}</p>
      </SuperEllipse>
    </div>
  );
}

export default Button;
