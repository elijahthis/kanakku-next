import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Invoices from "../invoices/Index";

const InvoicesPage = () => {
    const router = useRouter();
    return (
        <div>
            <Invoices />
        </div>
    );
};

InvoicesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default InvoicesPage;
