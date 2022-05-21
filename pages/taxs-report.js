import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Taxreport from "../reports/taxreport";

const TaxreportPage = () => {
    const router = useRouter();
    return (
        <div>
            <Taxreport />
        </div>
    );
};

TaxreportPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default TaxreportPage;
