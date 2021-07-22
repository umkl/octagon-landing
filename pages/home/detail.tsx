import homeStyles from "./home.module.scss";
import React, { useState } from "react";
import { useSpring, animated as a, useTransition } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import { config } from "node:process";

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
  // const textSpring = useTransition(isVisible,{
  //   from: {opacity: 0},
  //   to:{opacity: 1},
  // });

  // const transitions = useTransition(items, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   delay: 200,
  //   config: config.molasses,
  //   onRest: () => setItems([]),
  // })

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(sensorTriggered) => {
        if (sensorTriggered && isVisible != true) {
          console.log("triggered here:" + sensorTriggered);
          setVisible(true);
        }
      }}
    >
      <section
        className={homeStyles.detailSection}
        style={{ flexDirection: flipped ? "row-reverse" : "row" }}
      >
        <div className={homeStyles.textpart}>
          <a.div
            style={textSpring}
            className={homeStyles.animatedTextContainer}
          >
            <span className={homeStyles.teaser}>{teaser}</span>
            <span className={homeStyles.header}>{header}</span>
            <span className={homeStyles.text}>{text}</span>
          </a.div>
        </div>
        <div className={homeStyles.image}>
          <Image />
        </div>
      </section>
    </VisibilitySensor>
  );
}

export default HomeDetail;
