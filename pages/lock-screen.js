import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import LockScreen from "../authentication/LockScreen";

const LockScreenPage = () => {
    const router = useRouter();
    return (
        <div>
            <LockScreen />
        </div>
    );
};

export default LockScreenPage;
