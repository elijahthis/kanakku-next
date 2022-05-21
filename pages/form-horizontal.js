import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import HorizontalForm from "../forms/HorizontalForm";

const HorizontalFormPage = () => {
    const router = useRouter();
    return (
        <div>
            <HorizontalForm />
        </div>
    );
};

HorizontalFormPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default HorizontalFormPage;
