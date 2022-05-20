import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddPayment from "../payments/AddPayments";

const AddPaymentPage = () => {
    const router = useRouter();
    return (
        <div>
            <AddPayment />
        </div>
    );
};

AddPaymentPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default AddPaymentPage;
