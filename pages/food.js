import Head from 'next/head';
import Layout from "../components/layout";
import Posts from '../components/posts';
import utilStyles from '../styles/utils.module.css';
import { getImageHrefs, foodImageDir } from '../lib/images'
import { getSortedPostsMetaData, foodPostsStartPathArray } from '../lib/posts'

export async function getStaticProps() {
    return {
        props: {
            foodImageHrefs: await getImageHrefs(foodImageDir),
            postData: await getSortedPostsMetaData(foodPostsStartPathArray)
        }
    }
}

export default function Food({ foodImageHrefs, postData }) {
    return (
        <Layout>
            <Head>
                <title>Food</title>
            </Head>
            <div className={utilStyles.flexRow}>
                <div className={utilStyles.flexColumn}>
                    {foodImageHrefs.map( href => <img key={href} src={href} alt={href} title={href}/>)}
                </div>
                <div className={utilStyles.flexColumn}>
                    <h3>Posts</h3>
                    <Posts postData={postData}/>
                </div>
            </div>
        </Layout>
    )
}