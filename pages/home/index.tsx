import utilStyles from "./../../styles/utils.module.scss";
import Button from "../../components/elements/button";
import styles from "./home.module.scss";
import arrow from "./../../assets/Icons/arrow.svg";
import Detail from "./detail";
import { NavbarHeightContext } from "../../components/layouts/layout";
import { useContext } from "react";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import Image from "next/image";
import Image1 from "../../public/images/image-plate.png";
import Image2 from "./../../assets/Illustrations/image-home-2-restaurant_eating.svg";
import Image3 from "./../../assets/Illustrations/image-home-3-crypto.svg";
import Image4 from "./../../assets/Illustrations/image-home-4-perfect_rating.svg";
import ScrollIcon from "../../assets/Icons/scroll-icon.svg";

const Home = (): JSX.Element => {
  const { NavbarHeight } = useContext(NavbarHeightContext);
  const size: Size = useWindowSize();
  console.log()

  const calcHeightSection1 = () =>{
    if(size.height<parseInt(utilStyles.hSmall, 10)){  
      return parseInt(utilStyles.hSmall, 10) - 2 * NavbarHeight;
    }else{
      return size.height - 2 * NavbarHeight;
    }
  }
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
          style={{ height: calcHeightSection1() }}
        >
          <div className={styles.introtext}>
            <h2 className={utilStyles.heading_home_1}>
              Delicious food? <br /> All currencies? <br /> Good prices? <br />{" "}
              Octagon!
            </h2>
            <p className={utilStyles.text_home_1}>
              Whether Meat Lovers or Vegans, our meals make everyone happy!
            </p>
            <Button width={200} dark={false}>
              Reserve now
            </Button>
            <div className={styles.arrow}></div>
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
        <Detail
          teaser="WE OFFER ..."
          header="Amazing Food!"
          text="Enjoy the best food in town while being in a relaxing environment."
          image={Image2}
        />
        <Detail
          teaser="YOU CAN ..."
          header="Pay with whatever you want"
          text="Octagon follows the digitalistation trend and even supports all crypt-currencies!"
          image={Image3}
        />
        <Detail
          teaser="WE HAVE ..."
          header="5 Star rating"
          text="Everyone likes our food! Make it even better by getting discounts by sharing your visit on social-media. "
          image={Image4}
        />
      </main>
    </>
  );
};

export default Home;
