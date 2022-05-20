import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddEstimate from "../estimates/AddEstimate";

const AddEstimatePage = () => {
    const router = useRouter();
    return (
        <div>
            <AddEstimate />
        </div>
    );
};

AddEstimatePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default AddEstimatePage;
