import React from 'react'
import shoes from "../assets/image/Group 1229.png"
import jacket from "../assets/image/Group 1230.png"
import shorts from "../assets/image/Group 1231.png"
import shirt from "../assets/image/Group 1232.png"

const Category = () => {
    return (
        <div>
            <section className="mt-5">
                <h2 className="ml-3">Category</h2>
                <p className="ml-3">What are you currently looking for?</p>
                <div className="container mt-5">
                    <div className="row container">
                        <div className="col-md-3 col-sm-6 col-3 mb-5">
                            <div>
                                <img
                                    className="category"
                                    src={shoes}
                                    alt="shoes"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-3 mb-5">
                            <div>
                                <img
                                    className="category"
                                    src={jacket}
                                    alt="jacket"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-3 mb-5">
                            <div>
                                <img
                                    className="category"
                                    src={shorts}
                                    alt="shorts"
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-3 mb-5">
                            <div>
                                <img
                                    className="category"
                                    src={shirt}
                                    alt="t-shirt"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category