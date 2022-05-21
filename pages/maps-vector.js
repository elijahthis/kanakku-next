import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import VectorMaps from "../vectormaps/Index";

const VectorMapsPage = () => {
    const router = useRouter();
    return (
        <div>
            <VectorMaps />
        </div>
    );
};

VectorMapsPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default VectorMapsPage;
