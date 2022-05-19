import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";

const Customers = () => {
    const router = useRouter();
    return (
        <div>
            customers pagee{" "}
            <button
                onClick={() => {
                    router.push("/");
                }}
            >
                Route
            </button>
        </div>
    );
};

export default Customers;

Customers.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);
