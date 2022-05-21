import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import ExpensesReport from "../reports/expense";

const ExpensesReportPage = () => {
    const router = useRouter();
    return (
        <div>
            <ExpensesReport />
        </div>
    );
};

ExpensesReportPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ExpensesReportPage;
