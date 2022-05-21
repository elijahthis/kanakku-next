import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import DataTables from "../tables/DataTables";

const DataTablesPage = () => {
    const router = useRouter();
    return (
        <div>
            <DataTables />
        </div>
    );
};

DataTablesPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default DataTablesPage;
