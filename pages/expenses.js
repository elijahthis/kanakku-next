import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Expenses from "../expenses/Index";

const ExpensesPage = () => {
    const router = useRouter();
    return (
        <div>
            <Expenses />
        </div>
    );
};

ExpensesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ExpensesPage;
