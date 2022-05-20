import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Estimates from "../estimates/Index";

const EstimatesPage = () => {
    const router = useRouter();
    return (
        <div>
            <Estimates />
        </div>
    );
};

EstimatesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default EstimatesPage;
