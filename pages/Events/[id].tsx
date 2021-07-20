import Layout from "../../components/layouts/layout";
import { getAllEventIds, getEventData } from "../../lib/events";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";



export default function Event({
  eventData,
}: {
  eventData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <>
      <Head>
        <title>{eventData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{eventData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={eventData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: eventData.contentHtml }} />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllEventIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventData = await getEventData(params.id as string);
  return {
    props: {
      eventData,
    },
  };
};
