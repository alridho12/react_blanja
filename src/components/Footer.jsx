import React from 'react'
const Footer = () => {
    return (
        <div>
            <footer className="mt-5">
                <div className="container ">
                    {/* <img src={logo} alt="" /> */}
                    <p id="ff" className="mt-3 mb-5" style={{ color: "#FAFBFC" }}>
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In euismod
                        ipsum et dui <br /> rhoncus auctor.
                    </p>
                    <hr style={{ border: "#FAFBFC 1px solid" }} />
                    <div className="row">
                        <div className="col-6">
                            <p id="ff" style={{ color: "#FAFBFC" }}>
                                2023 Blanja. All right reserved
                            </p>
                        </div>
                        <div className="col-6 row d-flex justify-content-end m-0">
                            <div className="mr-5">
                                <p id="ff" style={{ color: "#FAFBFC" }}>
                                    Telephone
                                </p>
                            </div>
                            <div>
                                <p id="ff" style={{ color: "#FAFBFC" }}>
                                    Email
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer