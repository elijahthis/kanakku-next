import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import Components from "../components/Index";

const ComponentsPage = () => {
    const router = useRouter();
    return (
        <div>
            <Components />
        </div>
    );
};

ComponentsPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ComponentsPage;
