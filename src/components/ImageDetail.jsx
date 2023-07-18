import React from 'react'

const ImageDetail = (props) => {
    return (
        <>
            <div className="col-md-4 left-section">
                <img
                    style={{ borderRadius: 10 }}
                    crossOrigin='anonymous'
                    src={props.photo}
                    alt="product"
                />
                <div className="row mt-2 m-0">
                    <div className="col-md-3 col-3 d-flex justify-content-center">
                        <img
                            style={{ borderRadius: 10 }}
                            crossOrigin='anonymous'
                            src={props.photo}
                            alt="product"
                        />
                    </div>
                    <div className="col-md-3 col-3 d-flex justify-content-center">
                        <img
                            style={{ borderRadius: 10 }}
                            crossOrigin='anonymous'
                            src={props.photo}
                            alt="product"
                        />
                    </div>
                    <div className="col-md-3 col-3 d-flex justify-content-center">
                        <img
                            style={{ borderRadius: 10 }}
                            crossOrigin='anonymous'
                            src={props.photo}
                            alt="product"
                        />
                    </div>
                    <div className="col-md-3 col-3 d-flex justify-content-center">
                        <img
                            style={{ borderRadius: 10 }}
                            crossOrigin='anonymous'
                            src={props.photo}
                            alt="product"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageDetail