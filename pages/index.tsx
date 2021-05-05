import BasicLayout from "layout/Basic";
import Head from 'next/head'
import {Listen} from "components/listen/Listen";
import {BestQuality} from "components/best-quality/BestQuality";
import {Subscribe} from "components/subscribe/Subscribe";
import {MoreListeners} from "components/more-listeners/MoreListeners";
import {AlbumPost} from "../interfaces/albums";

const Home = ({results}:AlbumPost) => {

    return (
        <>
            <Head>
                <title>Muse.ic</title>
                <meta name='some text' content='work task'/>
            </Head>
            <BasicLayout>
                <Listen />
                <BestQuality  results={results}/>
            </BasicLayout>
            <Subscribe />
            <MoreListeners/>
        </>
    )
}

export default Home;

export const getStaticProps = async () => {
    const  res = await  fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`)
    const albums = await  res.json()
    return {
        props: {
            albums
        }

    }
}
