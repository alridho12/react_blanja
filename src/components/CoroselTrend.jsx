import React from 'react'
import promotion from "../assets/image/Card Promotion (1).png"
import promotion2 from "../assets/image/Card Promotion 2.png"

const CoroselTrend = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active col-12">
                                    <img
                                        src={promotion}
                                        className="w-100"
                                        alt="Promotion"
                                    />
                                </div>
                                <div className="carousel-item col-12">
                                    <img
                                        src={promotion2}
                                        className="w-100"
                                        alt="Promotion2"
                                    />
                                </div>
                                <div className="carousel-item col-12">
                                    <img
                                        src={promotion}
                                        className="w-100"
                                        alt="Promotion"
                                    />
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-target="#carouselExampleControls"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-target="#carouselExampleControls"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoroselTrend