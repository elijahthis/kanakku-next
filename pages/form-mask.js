import Layout from "../layouts/Layout";
import Head from "next/head";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import FormMask from "../forms/FormMask";

const FormMaskPage = () => {
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
            <FormMask />
        </div>
    );
};

FormMaskPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default FormMaskPage;
