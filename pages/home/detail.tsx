import homeStyles from "./home.module.scss";
import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

interface Props {
  teaser: string;
  header: string;
  text: string;
  Image: any;
  flipped?: boolean;
}

function HomeDetail(props: Props) {
  const { teaser, header, text, Image, flipped } = props;
  const [isVisible, setVisible] = useState(false);
  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? "0px" : `${flipped ? "+" : "-"}500px`,
  });
  return (
    <section
      className={homeStyles.detailSection}
      style={{ flexDirection: flipped ? "row-reverse" : "row" }}
    >
      <div className={homeStyles.textpart}>
        <VisibilitySensor
          partialVisibility
          onChange={(sensorTriggered) => {
            console.log("kek2" + isVisible);
            if (sensorTriggered && isVisible != true) {
              setVisible(true);
              console.log("kek" + isVisible);
              console.log(sensorTriggered);
            }
          }}
        >
          <a.div
            style={textSpring}
            className={homeStyles.animatedTextContainer}
          >
            <span className={homeStyles.teaser}>{teaser}</span>
            <span className={homeStyles.header}>{header}</span>
            <span className={homeStyles.text}>{text}</span>
          </a.div>
        </VisibilitySensor>
      </div>
      <div className={homeStyles.image}>
        <Image />
      </div>
    </section>
  );
}

export default HomeDetail;
