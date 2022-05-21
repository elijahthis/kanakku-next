import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Login from "../authentication/Login";

const LoginPage = () => {
    const router = useRouter();
    return (
        <div>
            <Login />
        </div>
    );
};

export default LoginPage;
