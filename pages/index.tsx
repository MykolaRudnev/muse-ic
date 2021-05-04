import styled from "styled-components";
import BasicLayout from "layout/Basic";
import Head from 'next/head'
import {Listen} from "../components/listen/Listen";
import {BestQuality, ContainerBestQuality} from "../components/best-quality/BestQuality";



const Title = styled.h1`
  color: white;
`;

// @ts-ignore
const Home = ({music}) => {
    console.log(music);
    return (
        <>
            <Head>
                <title>Hello</title>
                <meta name='some text' content='work task'/>
            </Head>
            <BasicLayout>
                <Listen />
                <BestQuality music={music}/>
            </BasicLayout>
        </>
    )
}

export default Home;

export const getStaticProps = async  () => {
    const  res = await  fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`)
    const music = await  res.json()

    return {
        props: {
            music
        }
    }
}
