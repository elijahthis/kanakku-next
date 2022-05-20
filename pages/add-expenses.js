import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddExpenses from "../expenses/AddExpenses";

const AddExpensesPage = () => {
    const router = useRouter();
    return (
        <div>
            <AddExpenses />
        </div>
    );
};

AddExpensesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default AddExpensesPage;
