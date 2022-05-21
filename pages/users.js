import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Users from "../users/Index";

const UsersPage = () => {
    const router = useRouter();
    return (
        <div>
            <Users />
        </div>
    );
};

export default UsersPage;
