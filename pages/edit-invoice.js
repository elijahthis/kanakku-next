import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import EditInvoice from "../invoices/EditInvoice";

const EditInvoicePage = () => {
    const router = useRouter();
    return (
        <div>
            <EditInvoice />
        </div>
    );
};

EditInvoicePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default EditInvoicePage;
