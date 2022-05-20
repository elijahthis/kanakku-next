import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Payments from "../payments/Index";

const PaymentsPage = () => {
    const router = useRouter();
    return (
        <div>
            <Payments />
        </div>
    );
};

PaymentsPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default PaymentsPage;
