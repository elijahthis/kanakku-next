import img4 from '../assets/img/profiles/avatar-04.jpg'
import img6 from '../assets/img/profiles/avatar-06.jpg'
import img8 from '../assets/img/profiles/avatar-08.jpg'
import img10 from '../assets/img/profiles/avatar-10.jpg'
import img12 from '../assets/img/profiles/avatar-12.jpg'

const recentinvoices =  [
    {
        id: 1,
        customer_name: "Barbara Moore",
        image: img4,
        amount: "$118",
        due_date: "23 Nov 2020",
        status: "Paid"
    },
    {
        id: 2,
        customer_name: "Karlene Chaidez",
        image: img6,
        amount: "$222",
        due_date: "18 Nov 2020",
        status: "Sent"
    },
    {
        id: 3,
        customer_name: "Russell Copeland",
        image: img8,
        amount: "$347",
        due_date: "10 Nov 2020",
        status: "Partially Paid"
    },
    {
        id: 4,
        customer_name: "Joseph Collins",
        image: img10,
        amount: "$826",
        due_date: "25 Sep 2020",
        status: "Overdue"
    },
    {
        id: 5,
        customer_name: "Jennifer Floyd",
        image: img12,
        amount: "$519",
        due_date: "18 Sep 2020",
        status: "Paid"
    }
]

export default recentinvoices;
