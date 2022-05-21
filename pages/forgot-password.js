import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import ForgotPassword from "../authentication/ForgotPassword";

const ForgotPasswordPage = () => {
    const router = useRouter();
    return (
        <div>
            <ForgotPassword />
        </div>
    );
};

export default ForgotPasswordPage;
