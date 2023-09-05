import React from 'react'
import shoes from "../assets/image/Group 1229.png"
import jacket from "../assets/image/Group 1230.png"
import shorts from "../assets/image/Group 1231.png"
import shirt from "../assets/image/Group 1232.png"

const Category = () => {
    return (
        <div>
            <section className="mt-5 container">
                <h2 className="">Category</h2>
                <hr style={{ borderColor: "red", borderWidth: "2px", borderStyle: "solid" }} />
                <p className="">What are you currently looking for?</p>
                <div className="row m-0 mt-5">
                    <div className="col-md-3 col-6 mb-5">
                        <img
                            className="category"
                            src={shoes}
                            alt="shoes"
                        />
                    </div>
                    <div className="col-md-3 col-6 mb-5">
                        <img
                            className="category"
                            src={jacket}
                            alt="jacket"
                        />
                    </div>
                    <div className="col-md-3 col-6 mb-5">
                        <img
                            className="category"
                            src={shorts}
                            alt="shorts"
                        />
                    </div>
                    <div className="col-md-3 col-6 mb-5">
                        <img
                            className="category"
                            src={shirt}
                            alt="t-shirt"
                        />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Category