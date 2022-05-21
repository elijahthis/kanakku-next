import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Profile from "../Profile/Index";

const ProfilePage = () => {
    const router = useRouter();
    return (
        <div>
            <Profile />
        </div>
    );
};

ProfilePage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default ProfilePage;
