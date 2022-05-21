import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import BasicTables from "../tables/BasicTables";

const BasicTablesPage = () => {
    const router = useRouter();
    return (
        <div>
            <BasicTables />
        </div>
    );
};

BasicTablesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default BasicTablesPage;
