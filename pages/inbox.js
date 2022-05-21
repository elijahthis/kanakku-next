import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Inbox from "../application/Inbox";

const InboxPage = () => {
    const router = useRouter();
    return (
        <div>
            <Inbox />
        </div>
    );
};

InboxPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default InboxPage;
