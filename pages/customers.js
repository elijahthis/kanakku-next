import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Customers from "../customers/Index";

const CustomersPage = () => {
    const router = useRouter();
    return (
        <div>
            <Customers />
        </div>
    );
};

CustomersPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default CustomersPage;
