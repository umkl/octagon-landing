import eventStyles from "./events.module.scss";
import React from "react";
import { getAllEventIds, getEventData } from "./../../lib/events";
import SuperEllipse from "react-superellipse";
import utilStyles from "./../../styles/utils.module.scss";
import Link from "next/link";
import MelloImage from "./../../assets/Illustrations/image-event-1-mello_live_music.svg";
import Date from '../../components/elements/date';

// import { GetStaticPaths, GetStaticProps } from "next";

interface IEvent {
  id: string;
  contentHtml: string;
  date: string;
  title: string;
}

export const Event = (eventData: IEvent) => {
  return (
    <div className={eventStyles.eventContainer}>
      <Link href={`/Events/${eventData.id}`}>
        <SuperEllipse
          r1={0.0000006}
          r2={0.232}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: utilStyles.se_blue_light,
          }}
        >
          <div className={eventStyles.eventContent}>
            <div className={eventStyles.imagePart}>
              <MelloImage />
            </div>
            <div className={eventStyles.textpart}>
              <h2 className={eventStyles.title}>{eventData.title}</h2>
              <Date dateString={eventData.date}/>
              <div
                className={eventStyles.contentHTML}
                dangerouslySetInnerHTML={{ __html: eventData.contentHtml }}
              ></div>
            </div>
          </div>
        </SuperEllipse>
      </Link>
    </div>
  );
};

export default Event;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllEventIds();
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const eventData = await getEventData(params.id as string);
//   return {
//     props: {
//       eventData,
//     },
//   };
// };
