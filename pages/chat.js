import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Chat from "../application/Chat";

const ChatPage = () => {
    const router = useRouter();
    return (
        <div>
            <Chat />
        </div>
    );
};

ChatPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ChatPage;
