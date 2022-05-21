import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import VerticalForm from "../forms/VerticalForm";

const VerticalFormPage = () => {
    const router = useRouter();
    return (
        <div>
            <VerticalForm />
        </div>
    );
};

VerticalFormPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default VerticalFormPage;
