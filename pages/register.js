import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Register from "../authentication/Register";

const RegisterPage = () => {
    const router = useRouter();
    return (
        <div>
            <Register />
        </div>
    );
};

export default RegisterPage;
