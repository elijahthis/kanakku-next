import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import BlankPage from "../blankpage/Index";

const BlankPagePage = () => {
    const router = useRouter();
    return (
        <div>
            <BlankPage />
        </div>
    );
};

BlankPagePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default BlankPagePage;
