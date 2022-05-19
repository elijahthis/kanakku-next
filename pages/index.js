import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            {" "}
            base pagee{" "}
            <button
                onClick={() => {
                    router.push("/customers");
                }}
            >
                Route
            </button>
        </div>
    );
}

Home.getLayout = (page) => (
    <Layout>
        <Sidebar />
        {page}
    </Layout>
);
