import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import EditExpenses from "../expenses/EditExpenses";

const EditExpensesPage = () => {
    const router = useRouter();
    return (
        <div>
            <EditExpenses />
        </div>
    );
};

EditExpensesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default EditExpensesPage;
