import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import SalesReport from "../reports/salesReport";

const SalesReportPage = () => {
    const router = useRouter();
    return (
        <div>
            <SalesReport />
        </div>
    );
};

SalesReportPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default SalesReportPage;
