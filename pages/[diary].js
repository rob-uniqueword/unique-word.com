import { k_dictionary } from "../lib/translation";
import {
  getSortedPostsMetaData,
  kDiaryPostsStartPathArray,
} from "../lib/posts";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Dictionary from "../components/dictionary";
import Posts from "../components/posts";
import Head from "next/head";

// this feels wrong. Is there a better solution with routing or something?
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          diary: "일기",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      postData: await getSortedPostsMetaData(kDiaryPostsStartPathArray),
    },
  };
}

export default function 일기({ postData }) {
  return (
    <Layout>
      <Head>
        <title>내 일기</title>
      </Head>
      <div className={utilStyles.flexRow}>
        <div className={utilStyles.flexColumn}>
          <h3>Dictionary</h3>
          <Dictionary dictionary={k_dictionary} />
        </div>
        <div className={utilStyles.flexColumn}>
          <h3>Posts</h3>
          <Posts postData={postData} />
        </div>
      </div>
    </Layout>
  );
}
