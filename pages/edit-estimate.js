import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import EditEstimate from "../estimates/EditEstimate";

const EditEstimatePage = () => {
    const router = useRouter();
    return (
        <div>
            <EditEstimate />
        </div>
    );
};

EditEstimatePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default EditEstimatePage;
