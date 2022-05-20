import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';

const BlankPage = () => {
        return (

            <div className="main-wrapper">
                
                <Header />
                <Sidebar />
            
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					{/*Page Header */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Blank Page</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
									<li className="breadcrumb-item active">Blank Page</li>
								</ul>
							</div>
						</div>
					</div>
					{/* /Page Header */}
					
					<div className="row">
						<div className="col-sm-12">
							Contents here
						</div>			
					</div>
					
				</div>			
			</div>

            </div>
        );
    
}
export default BlankPage;