import homeStyles from "./home.module.scss";
import React from "react";

interface Props {
  teaser: string;
  header: string;
  text: string;
  Image: any;
  flipped?: boolean;
}

function Detail(props: Props) {
  const { teaser, header, text, Image, flipped} = props;

  return (
    <section className={homeStyles.detailSection} style={{flexDirection:flipped?'row-reverse': 'row'}}>
      <div className={homeStyles.textpart}>
        <span className={homeStyles.teaser}>{teaser}</span>
        <span className={homeStyles.header}>{header}</span>
        <span className={homeStyles.text}>{text}</span>
      </div>
      <div className={homeStyles.image}><Image/></div>
    </section>
  );
}

export default Detail;
