import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import BasicInputs from "../forms/BasicInputs";

const BasicInputsPage = () => {
    const router = useRouter();
    return (
        <div>
            <BasicInputs />
        </div>
    );
};

BasicInputsPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default BasicInputsPage;
