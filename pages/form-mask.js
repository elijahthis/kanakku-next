import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import FormMask from "../forms/FormMask";

const FormMaskPage = () => {
    const router = useRouter();
    return (
        <div>
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
