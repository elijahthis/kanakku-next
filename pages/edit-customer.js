import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import EditCustomer from "../customers/EditCustomer";

const EditCustomersPage = () => {
    const router = useRouter();
    return (
        <div>
            <EditCustomer />
        </div>
    );
};

EditCustomersPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default EditCustomersPage;
