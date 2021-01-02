import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsMetaData, allPostsStartPathArray } from '../lib/posts';
import Posts from '../components/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsMetaData(allPostsStartPathArray);
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my Learnatorium. This is where the magic happens.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Recent Posts
        </h2>
        <Posts postData={allPostsData}/>
      </section>
    </Layout>
  )
}
