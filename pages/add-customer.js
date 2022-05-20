import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddCustomer from "../customers/AddCustomer";

const AddCustomersPage = () => {
    const router = useRouter();
    return (
        <div>
            <AddCustomer />
        </div>
    );
};

AddCustomersPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default AddCustomersPage;
