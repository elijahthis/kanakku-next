import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import FormValidation from "../forms/FormValidation";

const FormValidationPage = () => {
    const router = useRouter();
    return (
        <div>
            <FormValidation />
        </div>
    );
};

FormValidationPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default FormValidationPage;
