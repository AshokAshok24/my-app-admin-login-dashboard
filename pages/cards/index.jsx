import React from "react";

const Index = () => {
  return (

    <>

      <div className="container-fluid">

        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab1">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab2">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab3">Reports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab4">Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab5">Analytics</a>
          </li>
        </ul>

        <div className="tab-content mt-3">

          <div className="tab-pane fade show active" id="tab1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Dashboard Overview</h5>
                <p className="card-text">Quick summary of system activity.</p>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tab2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text">Manage user roles and access.</p>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tab3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reports</h5>
                <p className="card-text">View and download reports.</p>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tab4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Settings</h5>
                <p className="card-text">Customize app preferences.</p>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tab5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Analytics</h5>
                <p className="card-text">View data insights and trends.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>


  );
};

export default Index;
