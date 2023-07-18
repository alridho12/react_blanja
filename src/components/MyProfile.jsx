import React from 'react'

const MyProfile = () => {
    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div>
                    <h5 className='pt-4'>My Profile</h5>
                    <span className='pt-0'>Manage your porfile information</span>
                </div>
                <hr className="mt-1" />
                <div className="d-flex justify-content-between container-fluid p-0">
                    <div className='col-md-8'>
                        <div className='row container d-flex justify-content-between'>
                            <div><p>Name</p></div>
                            <div className='' style={{ display: 'flex', alignItems: 'center', marginRight: '-58px' }}>
                                <input className='' type='name' style={{ borderRadius: '4x', width: '348px', height: '48px' }}></input>
                            </div>
                        </div>
                        <div className='row container d-flex justify-content-between mt-3'>
                            <div><p>Email</p></div>
                            <div className='' style={{ display: 'flex', alignItems: 'center', marginRight: '-58px' }}>
                                <input className='' type='email' style={{ borderRadius: '4x', width: '348px', height: '48px' }}></input>
                            </div>
                        </div>
                        <div className='row container d-flex justify-content-between mt-3'>
                            <div className='' style={{ marginLeft: "-17px" }}><p>Phone number</p></div>
                            <div className='' style={{ display: 'flex', alignItems: 'center', marginRight: '-58px' }}>
                                <input className='' type='name' style={{ borderRadius: '4x', width: '348px', height: '48px' }}></input>
                            </div>
                        </div>
                        <div className='row container mt-3'>
                            <div className='mr-5'><p>Gender</p></div>
                            <div className='' style={{ display: 'flex', alignItems: 'center' }}>
                                <label className='mr-md-5' style={{ display: "flex", alignItems: "center" }}>
                                    <input
                                        type="radio"
                                        style={{
                                            width: "18px",
                                            height: "18px",
                                            border: "2px solid #000",
                                            marginRight: "8px",
                                        }}
                                    />
                                    <p>Men</p>
                                </label>
                            </div>
                            <div className='' style={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ display: "flex", alignItems: "center" }}>
                                    <input
                                        type="radio"
                                        style={{
                                            width: "18px",
                                            height: "18px",
                                            border: "2px solid #000",
                                            marginRight: "8px",
                                        }}
                                    />
                                    <p>Women</p>
                                </label>
                            </div>
                        </div>
                        <div className='row container d-flex justify-content-between mt-3'>
                            <div className='' style={{ marginLeft: "-17px" }}><p>Date of birth</p></div>
                            <div className='row' style={{ display: 'flex', alignItems: 'center', marginRight: '-38px' }}>
                                <div style={{ marginRight: '15px' }}>
                                    <input style={{ width: '100px', height: '40px' }} type="number" id="day" min="1" max="31" />
                                    <datalist id="days">
                                        <option value="1" />
                                        <option value="30" />
                                    </datalist>
                                </div>
                                <div style={{ marginRight: '15px' }}>
                                    <input style={{ width: '100px', height: '40px' }} type="number" id="month" min="1" max="12" />
                                    <datalist id="months">
                                        <option value="1" />
                                        <option value="12" />
                                    </datalist>
                                </div>
                                <div>
                                    <input style={{ width: '100px', height: '40px' }} type="number" id="year" min="1900" max="2023" />
                                    <datalist id="years">
                                        <option value="1980" />
                                        <option value="2023" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                    </div>
                </div>
                {/* <div className="row m-0">
              <div>
                <a className="redlink" href="">
                  <span>All items</span>
                </a>
              </div>
              <div className="ml-md-5 ml-1">
                <a className="redlink" href="">
                  <span>Not yet paid</span>
                </a>
              </div>
              <div className="ml-md-5 ml-1">
                <a className="redlink" href="">
                  <span>Packed</span>
                </a>
              </div>
              <div className="ml-md-5 ml-1">
                <a className="redlink" href="">
                  <span>Sent</span>
                </a>
              </div>
              <div className="ml-md-5 ml-1">
                <a className="redlink" href="">
                  <span>Completed</span>
                </a>
              </div>
              <div className="ml-md-5 ml-1">
                <a className="redlink" href="">
                  <span>Order cancel</span>
                </a>
              </div>
            </div> */}
            </div>
        </div>
    )
}

export default MyProfile