import utilStyles from "./../../styles/utils.module.scss";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";
import { getSortedEventsData } from "../../lib/events";
import eventStyles from "./events.module.scss";

const Events = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element => {
  return (
    <main>
      {/* <section className={utilStyles.headingMd}>
      </section> */}
      <section className={`${eventStyles.section}`}>
        <h2 className={eventStyles.headingLg}>Unforgettable Moments</h2>
        <h3 className={eventStyles.headingSm}>Enjoy memorable occasions with your friends and family at Octagon Events.</h3>
        <p className={eventStyles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis proin porttitor fames suspendisse rhoncus sed id. Sed in ut nulla morbi. Enim suscipit et libero, turpis tempus ut. Pellentesque lobortis orci velit sollicitudin nisl sed. Fames pulvinar fames amet eu elit. Faucibus suspendisse mauris non libero urna eleifend nisl.</p>
        <div className={eventStyles.upcmngHeader}>Upcoming Event</div>
        <div className={eventStyles.upcmngEvent}>
          allPostsData
        </div>
        scroll for more ...

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/Events/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        
      </section>
    </main>
  );
};

export default Events;

//prerender at buildtime
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedEventsData()
  return {
    props: {
      allPostsData
    }
  }
}
