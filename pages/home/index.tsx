import utilStyles from "./../../styles/utils.module.scss";
import Button from "../../components/elements/button";
import styles from "./home.module.scss";
import arrow from "./../../assets/Icons/arrow.svg";
import HomeDetail from "./detail";
import { NavbarHeightContext } from "../../components/layouts/layout";
import { useContext, useEffect, useState } from "react";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import Image from "next/image";
import Image1 from "../../public/images/image-plate.png";
import Image2 from "./../../assets/Illustrations/image-home-2-restaurant_eating.svg";
import Image3 from "./../../assets/Illustrations/image-home-3-crypto.svg";
import Image4 from "./../../assets/Illustrations/image-home-4-perfect_rating.svg";
import ScrollIcon from "../../assets/Icons/scroll-icon.svg";
import { animated as a, useSpring } from "react-spring";
import Arrow from "./../../assets/Icons/arrow1.svg";

const Home = (): JSX.Element => {
  const { NavbarHeight } = useContext(NavbarHeightContext);
  const size: Size = useWindowSize();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const headingSpring1 = useSpring({
    opacity: loaded ? 1 : 0,
  });
  const headingSpring2 = useSpring({
    opacity: loaded ? 1 : 0,
  });
  const headingSpring3 = useSpring({
    opacity: loaded ? 1 : 0,
  });
  const headingSpring4 = useSpring({
    opacity: loaded ? 1 : 0,
  });

  const fadeInSpring = useSpring({
    opacity: loaded ? 1 : 0,
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
      <div className={styles.scrollSuggestor}>
        <span>find out more about us</span>
        <div className={styles.scrollIcon}>
          <ScrollIcon />
        </div>
      </div>
      <main>
        <section
          className={styles.section1}
          style={{ height: calcHeightSection1(), marginBottom: NavbarHeight }}
        >
          <div className={styles.introtext}>
            <h2 className={utilStyles.heading_home_1}>
              <a.div style={headingSpring1}>Delicious food?</a.div>
              <a.div style={headingSpring2}>All currencies? </a.div>
              <a.div style={headingSpring3}>Good prices? </a.div>
              <a.div style={headingSpring4}>Octagon!</a.div>
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

          <div className={styles.image1}>
            <Image
              width={700}
              height={500}
              src={Image1}
              alt="Octagon-meal-image"
            />
          </div>
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
