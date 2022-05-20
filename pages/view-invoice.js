import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import ViewInvoice from "../invoices/ViewInvoice";

const ViewInvoicePage = () => {
    const router = useRouter();
    return (
        <div>
            <ViewInvoice />
        </div>
    );
};

ViewInvoicePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ViewInvoicePage;
