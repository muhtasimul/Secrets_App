import MainPage from "../components/MainComponents/MainPage"
import Head from "next/head";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>
                    Secrets App
                </title>
                <meta name="description" content="Encrypt your messages here." />
            </Head>
            <MainPage />
        </>
    )
}