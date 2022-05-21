import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import Calendar from "../application/Calendar";

const CalendarPage = () => {
    const router = useRouter();
    return (
        <div>
            <Calendar />
        </div>
    );
};

CalendarPage.getLayout = (page) => (
    <Layout>
        <Header />
        <Sidebar />
        {page}
    </Layout>
);

export default CalendarPage;
