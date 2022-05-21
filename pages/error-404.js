import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Page404 from "../errorpages/404";

const Page404Page = () => {
    const router = useRouter();
    return (
        <div>
            <Page404 />
        </div>
    );
};

export default Page404Page;
