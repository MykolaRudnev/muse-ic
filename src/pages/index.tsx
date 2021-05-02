import styled from "styled-components";
import BasicLayout from "layout/Basic";
import Head from 'next/head'
import {Listen} from "../components/Listen";


const Title = styled.h1`
  color: red;
`;

// @ts-ignore
const Home = ({music}) => {
    console.log(music)
    return (
        <>
            <Head>
                <title>Hello</title>
                <meta name='some text' content='work task'/>
            </Head>
            <BasicLayout>
                <Listen />
            </BasicLayout>
        </>
    )
}

export default Home;


// export const getStaticProps = async  () => {
//     const  res = await  fetch(`https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=album&limit=7`)
//     const music = await  res.json()
//
//     return {
//         props: {
//             music
//         }
//     }
// }
