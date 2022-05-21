import Head from "next/head";
import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import InputGroups from "../forms/FormInputGroups";

const InputGroupsPage = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Kanakku</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <InputGroups />
        </div>
    );
};

InputGroupsPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default InputGroupsPage;
