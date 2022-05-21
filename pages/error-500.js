import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Page500 from "../errorpages/500";

const Page500Page = () => {
    const router = useRouter();
    return (
        <div>
            <Page500 />
        </div>
    );
};

export default Page500Page;
