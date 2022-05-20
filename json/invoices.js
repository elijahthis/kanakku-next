import img4 from '../assets/img/profiles/avatar-04.jpg';
import img6 from '../assets/img/profiles/avatar-06.jpg';
import img8 from '../assets/img/profiles/avatar-08.jpg';
import img10 from '../assets/img/profiles/avatar-10.jpg';
import img12 from '../assets/img/profiles/avatar-12.jpg';


const invoices = [
    {
        "id": 1,
        "invoice_number": "INV-65ZTE15",
        "customer_name": " Barbara Moore",
        "customer_image": img4,
        "created_date": "16 Nov 2020",
        "amount": "$118",
        "due_date": "23 Nov 2020",
        "status": "Paid",
        "paid_on": "23 Nov 2020, 10:45pm"
    },
    {
        "id": 2,
        "invoice_number": "INV-65ZTE15",
        "customer_name": "  Karlene Chaidez",
        "customer_image": img6,
        "created_date": "14 Nov 2020",
        "amount": "$222",
        "due_date": "18 Nov 2020",
        "status": "Sent",
        "paid_on": "20 Nov 2020, 7:22pm"
    },
    {
        "id": 3,
        "invoice_number": "INV-65ZTE15",
        "customer_name": " Russell Copeland",
        "customer_image": img8,
        "created_date": "7 Nov 2020",
        "amount": "$347",
        "due_date": "10 Nov 2020",
        "status": "Partially Paid",
        "paid_on": "13 Nov 2020, 8:30am"
    },
    {
        "id": 4,
        "invoice_number": "INV-65ZTE15",
        "customer_name": "Joseph Collins",
        "customer_image": img10,
        "created_date": "24 Sep 2020",
        "amount": "$826",
        "due_date": "25 Sep 2020",
        "status": "Overdue",
        "paid_on": "27 Sep 2020, 6:10pm"
    },
    {
        "id": 5,
        "invoice_number": "INV-65ZTE15",
        "customer_name": " Jennifer Floyd",
        "customer_image": img12,
        "created_date": "17 Sep 2020",
        "amount": "$519",
        "due_date": "18 Sep 2020",
        "status": "Paid",
        "paid_on": "19 Sep 2020, 7:50pm"
    }
]

export default invoices;