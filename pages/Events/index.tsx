import utilStyles from "./../../styles/utils.module.scss";
import Link from "next/link";
// import Date from "../../components/elements/date";
import { GetStaticProps } from "next";
import { getCompleteSortedEventsData, IEventData } from "../../lib/events";
import eventStyles from "./events.module.scss";
import Event from "../../components/elements/event";
import { useContext } from "react";
import { NavbarHeightContext } from "../../components/layouts/layout";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import Head from "next/head";

const Events = ({
  allEventsData,
}: {
  allEventsData: IEventData[];
}): JSX.Element => {
  // const upcomingEvent: IEventData = allEventsData[0];

  const { NavbarHeight } = useContext(NavbarHeightContext);
  const size: Size = useWindowSize();
  // const calcHeightSection1 = () => {
  //   // if (size.height < parseInt(utilStyles.hSmall, 10)) {
  //   //   return parseInt(utilStyles.hSmall, 10) - 2*NavbarHeight;
  //   // } else {
  //   // }
  //   return size.height - NavbarHeight;
  // };
  // calcHeightSection1();
  return (
    <>
      <Head>
        <title>Events - Octagon</title>
      </Head>
      <main>
        <section
          className={`${eventStyles.section}`}
          // style={{
          //   minHeight: `${calcHeightSection1()}px`,
          // }}
        >
          <h2 className={utilStyles.headingLg}>Unforgettable Moments</h2>
          <h3 className={utilStyles.headingMdFd}>
            Enjoy memorable occasions with your friends and family at Octagon
            Events.
          </h3>
          <p className={utilStyles.textMd}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius iste sed. Nesciunt officia doloremque fuga porro quam quod sequi cumque odit excepturi voluptates voluptatibus amet aut error, eos corporis?
          Libero quae voluptatum ad magnam fugiat ab ducimus. Inventore, accusantium! Laudantium suscipit fugit quis voluptates voluptatibus laborum nisi, iste temporibus repudiandae dolorum quos a expedita at? Similique exercitationem quo dolore.
          </p>
          <div className={eventStyles.upcmngHeader}>Upcoming Events</div>
        </section>
        {allEventsData.map(({ id, date, title, contentHtml }) => {
          // if (id != upcomingEvent.id) {
          return (
            <Event
              key={id}
              id={id}
              title={title}
              contentHtml={contentHtml}
              date={date}
            />
          );
          // }
        })}
      </main>
    </>
  );
};

export default Events;

//prerender at buildtime
export const getStaticProps: GetStaticProps = async () => {
  const allEventsData: IEventData[] = await getCompleteSortedEventsData();
  return {
    props: {
      allEventsData,
    },
  };
};
