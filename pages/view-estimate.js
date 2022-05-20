import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import ViewEstimate from "../estimates/ViewEstimate";

const ViewEstimatePage = () => {
    const router = useRouter();
    return (
        <div>
            <ViewEstimate />
        </div>
    );
};

ViewEstimatePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ViewEstimatePage;
