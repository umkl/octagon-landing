import detailStyles from "./detail.module.scss";
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
    // delay: 1000,
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
        className={detailStyles.detailSection}
        style={{ flexDirection: flipped ? "row-reverse" : "row" }}
      >
        <div className={detailStyles.textpart}>
          <a.div
            style={textSpring}
            className={detailStyles.animatedTextContainer}
          >
            <span className={detailStyles.teaser}>{teaser}</span>
            <span className={detailStyles.header}>{header}</span>
            <span className={detailStyles.text}>{text}</span>
          </a.div>
        </div>
        <div className={detailStyles.image}>
          <Image />
        </div>
      </section>
    </VisibilitySensor>
  );
}

export default HomeDetail;
