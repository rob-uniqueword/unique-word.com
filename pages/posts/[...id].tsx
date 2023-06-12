import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import {
  getPostPaths,
  getPostData,
  allPostsStartPathArray,
  IPost,
} from "../../lib/posts";
import { k_dictionary, getTranslation } from "../../lib/translation";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

export async function getStaticPaths() {
  const paths = await getPostPaths(allPostsStartPathArray);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string[] }>): Promise<
  GetStaticPropsResult<{ postData: IPost }>
> {
  if (!params?.id) {
    throw new Error("getStaticProps: null parameters");
  }

  const postData = await getPostData(params.id);

  postData.contentHtml = postData.contentHtml
    ? getTranslation(postData.contentHtml, k_dictionary)
    : undefined;

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: IPost }): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date!} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml! }} />
      </article>
    </Layout>
  );
}
