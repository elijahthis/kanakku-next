import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import ProfitLossReport from "../reports/profitloss";

const ProfitLossReportPage = () => {
    const router = useRouter();
    return (
        <div>
            <ProfitLossReport />
        </div>
    );
};

ProfitLossReportPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ProfitLossReportPage;
