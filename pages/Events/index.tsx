import utilStyles from "./../../styles/utils.module.scss";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";
import { getCompleteSortedEventsData, IEventData } from "../../lib/events";
import eventStyles from "./events.module.scss";
import Event from "./event";

const Events = ({allEventsData}): JSX.Element => {
  const upcomingEvent = allEventsData[0];
  console.log("allpostsdata:"+upcomingEvent.date);
  return (
    <main>
      {/* <section className={utilStyles.headingMd}>
      </section> */}
      <section className={`${eventStyles.section}`}>
        <h2 className={utilStyles.headingLg}>Unforgettable Moments</h2>
        <h3 className={utilStyles.headingMdFd}>
          Enjoy memorable occasions with your friends and family at Octagon
          Events.
        </h3>
        <p className={utilStyles.textMd}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit
          odit quibusdam doloribus iure, quae reiciendis aspernatur aperiam
          inventore modi est totam pariatur, ab quasi iste deleniti, optio
          molestiae! Totam! Deleniti quia minus earum tempora explicabo
          obcaecati omnis ab vitae voluptate, ullam deserunt inventore alias
          ducimus quasi corporis exercitationem? Beatae vero totam, saepe
          deleniti incidunt dolores provident odit cum quo? Minus debitis ipsam
          explicabo expedita vero excepturi commodi quidem asperiores officia
          recusandae? Inventore earum, et hic eos molestias eum! Natus quam
          exercitationem sunt voluptatum suscipit, hic architecto voluptate
          magni cupiditate? Hic, nihil, ad officiis consequuntur inventore
          repellat illum, sint aliquid natus quaerat temporibus similique.
          Eveniet dolorum expedita omnis rerum, rem adipisci blanditiis quis
          magnam! Asperiores aperiam consectetur magni non totam?
        </p>
        <div className={eventStyles.upcmngHeader}>Upcoming Event</div>
        <div className={eventStyles.upcmngEvent}>
          {upcomingEvent.contentHTML}
          {/* <Event id={upcomingEvent.id} date={upcomingEvent.date}/> */}
        </div>
        scroll for more ...
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/Events/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
        </ul>
      </section>
    </main>
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
