import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddCustomer from "../customers/AddCustomer";

const AddCustomersPage = () => {
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
            <AddCustomer />
        </div>
    );
};

AddCustomersPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default AddCustomersPage;
