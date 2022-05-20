import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import payments from '../json/payments'
import datatable from '../utils/utils'
import Select2 from 'react-select2-wrapper';
import DatePicker from 'react-datepicker';

const Payments = () => {
    
	const [date, setDate] = useState(new Date());
	const [options, setOptions] = useState([
		{ id: 1, text: 'Draft' },
		{ id: 2, text: 'Sent' },
		{ id: 3, text: 'Viewed' },
		{ id: 4, text: 'Expired' },
		{ id: 5, text: 'Accepted' },
		{ id: 6, text: 'Rejected' },
	]);

	useEffect(() => {
		datatable('#paymentstable')
		$("#filter_search").click(function(){
			$("#filter_inputs").slideToggle(500);
        });
        let elements = Array.from(document.getElementsByClassName('select2-container'));
        elements.map(element => element.classList.add("width-100"))
	},[]);

	return (

		<div className="main-wrapper">
            <Header />
			<Sidebar />
			
			<div className="page-wrapper">
				<div className="content container-fluid">
			
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Payments</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
									<li className="breadcrumb-item active">Payments</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="/add-payments"  className="btn btn-primary mr-1">
									<i className="fas fa-plus"></i>
								</Link>
								<a className="btn btn-primary filter-btn" href="/payments#" id="filter_search">
									<i className="fas fa-filter"></i>
								</a>
							</div>
						</div>
					</div>
					
					<div id="filter_inputs" className="card filter-card">
						<div className="card-body pb-0">
							<div className="row">
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Customer</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Price</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Payment Mode</label>
										<Select2
                                            className="w-100"
                                            data={options}
                                            options={{
                                                placeholder: 'Select Status',
                                            }}
                                        />
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card card-table">
								<div className="card-body">
									<div className="table-responsive">
										<table className="table table-center table-hover datatable" id="paymentstable">
											<thead className="thead-light">
												<tr>
													<th>Reference ID</th>
													<th>Customer</th>
													<th>Amount</th>
													<th>Date</th>
													<th>Payment Method</th>
													<th className="text-right">Action</th>
												</tr>
											</thead>
											<tbody>
                                            {payments.map((item, index) => {
                                                return (
												<tr key={index}>
													<td><a href="#">{item.reference_id}</a></td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile"><img className="avatar avatar-sm mr-2 avatar-img rounded-circle" src={item.customer_image} alt="User Image" />{item.customer_name}</Link>
														</h2>
													</td>
													<td>{item.amount}</td>
													<td>{item.date}</td>
													<td>{item.payment_card}<strong>{item.card_no}</strong></td>
													<td className="text-right">
														<a className="btn btn-sm btn-white mr-2" href="#">
															<i className="fas fa-download mr-1"></i> PDF
														</a>
														<Link className="btn btn-sm btn-white" to="/view-invoice">
															<i className="far fa-eye mr-1"></i> View
														</Link>
													</td>
												</tr>
                                                );  })}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
}
export default Payments;