import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddInvoice from "../invoices/AddInvoice";

const AddInvoicePage = () => {
    const router = useRouter();
    return (
        <div>
            <AddInvoice />
        </div>
    );
};

AddInvoicePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default AddInvoicePage;
