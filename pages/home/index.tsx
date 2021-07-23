import utilStyles from "./../../styles/utils.module.scss";
import Button from "../../components/elements/button";
import styles from "./home.module.scss";
import arrow from "./../../assets/Icons/arrow.svg";
import HomeDetail from "../../components/elements/detail";
import { NavbarHeightContext } from "../../components/layouts/layout";
import { useContext, useEffect, useState } from "react";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import Image from "next/image";
import Image1 from "../../public/images/image-plate.png";
import Image2 from "./../../assets/Illustrations/image-home-2-restaurant_eating.svg";
import Image3 from "./../../assets/Illustrations/image-home-3-crypto.svg";
import Image4 from "./../../assets/Illustrations/image-home-4-perfect_rating.svg";
import ScrollIcon from "../../assets/Icons/scroll-icon.svg";
import { animated as a, useSpring, useTrail } from "react-spring";
import Arrow from "./../../assets/Icons/arrow1.svg";
import React from "react";
import Trail from "./../../components/elements/Trail";

const Home = (): JSX.Element => {
  const { NavbarHeight } = useContext(NavbarHeightContext);
  const size: Size = useWindowSize();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // const headingSpring1 = useSpring({
  //   opacity: loaded ? 1 : 0,
  //   marginLeft: loaded ? "0px" : "-400px",
  //   config: { duration: 550 },
  // });

  // const headingSpring1 = () => {
  //   const x = setTimeout(() => {
  //     return (
  //       useSpring({
  //         from: { opacity: 0, marginLeft: "-400px" },
  //         to: { opacity: 1, marginLeft: "0px" },
  //       }),
  //       2234234000
  //     );
  //   });
  //   return x;
  // };

  // const headingSpring2 = useSpring({
  //   opacity: loaded ? 1 : 0,
  //   marginLeft: loaded ? "0px" : "-400px",
  //   config: { duration: 750 },
  // });
  // const headingSpring3 = useSpring({
  //   opacity: loaded ? 1 : 0,
  //   marginLeft: loaded ? "0px" : "-400px",
  //   config: { duration: 450 },
  // });
  // const headingSpring4 = useSpring({
  //   opacity: loaded ? 1 : 0,
  //   marginLeft: loaded ? "0px" : "-400px",
  //   config: { duration: 350 },
  // });
  const delay = 2000;
  const circles = [{ cx: 1 }, { cx: 4 }, { cx: 7 }];
  const fadeInSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: delay,
    config:{duration: 2000}
  });

  // const delay = 2000;
  const radius = useSpring({ value: 1, from: { value: 0 }, delay: delay });

  const scrollSuggestorSpring = useSpring({
    opacity: loaded ? 1 : 0,
    marginBottom: loaded ? "0px" : "300px",
    config: { delay: 1250 },
  });

  const calcHeightSection1 = () => {
    if (size.height < parseInt(utilStyles.hSmall, 10)) {
      return parseInt(utilStyles.hSmall, 10) - 2 * NavbarHeight;
    } else {
      return size.height - 2 * NavbarHeight;
    }
  };
  return (
    <>
      <a.div style={scrollSuggestorSpring} className={styles.scrollSuggestor}>
        <span>find out more about us</span>
        <div className={styles.scrollIcon}>
          <ScrollIcon />
        </div>
      </a.div>
      <main>
        <section
          className={styles.section1}
          style={{ height: calcHeightSection1(), marginBottom: NavbarHeight }}
        >
          <div className={styles.introtext}>
            <h2 className={utilStyles.heading_home_1}>
              <Trail open={loaded}>
                <div className={styles.trailDiv}>Delicious food?</div>
                <div className={styles.trailDiv}>All currencies? </div>
                <div className={styles.trailDiv}>Good prices? </div>
                <div className={styles.trailDiv}>Octagon!</div>
              </Trail>
            </h2>
            <a.p style={fadeInSpring} className={utilStyles.text_home_1}>
              Whether Meat Lovers or Vegans, our meals make everyone happy!
            </a.p>
            <a.div className={styles.clickSection} style={fadeInSpring}>
              <Button width={200} dark={false}>
                Reserve now
              </Button>
              <a.div style={fadeInSpring} className={styles.arrow}>
                <Arrow />
              </a.div>
            </a.div>
          </div>

          <a.div style={fadeInSpring} className={styles.image1}>
            <Image
              width={700}
              height={500}
              src={Image1}
              alt="Octagon-meal-image"
            />
          </a.div>
        </section>
        <HomeDetail
          flipped
          teaser="WE OFFER ..."
          header="Amazing Food!"
          text="Enjoy the best food in town while being in a relaxing environment."
          Image={Image2}
        />
        <HomeDetail
          teaser="YOU CAN ..."
          header="Pay with whatever you want"
          text="Octagon follows the digitalistation trend and even supports all crypt-currencies!"
          Image={Image3}
        />
        <HomeDetail
          flipped
          teaser="WE HAVE ..."
          header="5 Star rating"
          text="Everyone likes our food! Make it even better by getting discounts by sharing your visit on social-media. "
          Image={Image4}
        />
      </main>
    </>
  );
};

export default Home;
