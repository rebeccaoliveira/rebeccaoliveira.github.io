import React from 'react'


const Responsive = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="d-block p-2" style={{backgroundColor: '#33A5FF', minHeight: '150px'}} />
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="d-block p-2" style={{backgroundColor: '#AF33FF', minHeight: '150px'}} />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-12">
        <h1 className="d-none d-xl-block">extra large</h1>
        <h1 className="d-none d-lg-block d-xl-none">large</h1>
        <h1 className="d-none d-md-block d-lg-none">medium</h1>
        <h1 className="d-none d-sm-block d-md-none">small</h1>
        <h1 className="d-block d-sm-none">extra small</h1>
      </div>
    </div>
  </div>
);

export default Responsive;
