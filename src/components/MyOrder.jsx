import React from 'react'
import { Link } from 'react-router-dom'

const MyOrder = () => {
    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div className="row d-flex justify-content-between m-0 pt-2">
                    <div>
                        <Link className="redlink" to="#">
                            <span>All items</span>
                        </Link>
                    </div>
                    <div className="ml-md-5 ml-1">
                        <Link className="redlink" to="#">
                            <span>Not yet paid</span>
                        </Link>
                    </div>
                    <div className="ml-md-5 ml-1">
                        <Link className="redlink" to="#">
                            <span>Packed</span>
                        </Link>
                    </div>
                    <div className="ml-md-5 ml-1">
                        <Link className="redlink" to="#">
                            <span>Sent</span>
                        </Link>
                    </div>
                    <div className="ml-md-5 ml-1">
                        <Link className="redlink" to="#">
                            <span>Completed</span>
                        </Link>
                    </div>
                    <div className="ml-md-5 ml-1">
                        <Link className="redlink" to="#">
                            <span>Order cancel</span>
                        </Link>
                    </div>
                </div>
                <hr className="mt-1" />
                <div className="" style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <ModalAddress /> */}
                </div>
            </div>
        </div>
    )
}

export default MyOrder