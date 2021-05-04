import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import Head from 'next/head'
import {Listen} from "../components/listen/Listen";
import {BestQuality} from "../components/best-quality/BestQuality";
import {NextPageContext} from "next";



const Title = styled.h1`
  color: white;
`;

// @ts-ignore
const Home = ({albums}) => {

    return (
        <>
            <Head>
                <title>Muse.ic</title>
                <meta name='some text' content='work task'/>
            </Head>
            <BasicLayout>
                <Listen />
                <BestQuality albums={albums}/>
            </BasicLayout>
        </>
    )
}

export default Home;

export const getStaticProps = async  ({req}: NextPageContext) => {
    const  res = await  fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`)
    const albums = await  res.json()

    return {
        props: {
            albums
        }
    }
}
