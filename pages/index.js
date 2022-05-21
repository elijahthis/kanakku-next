import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts/Layout";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { useRouter } from "next/router";
import Dashboard from "../dashboard/Index";

const DashboardPage = () => {
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
            <Dashboard />
        </div>
    );
};

DashboardPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default DashboardPage;
