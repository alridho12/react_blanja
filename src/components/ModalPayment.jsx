import axios from "axios";
import React, { useEffect, useState } from "react";

const ModalPayment = () => {
//   let [order, setOrder] = useState([]);
//   useEffect(() => {
//     const getUserId = localStorage.getItem("id_user");
//     axios
//       .get(`${process.env.REACT_APP_BACKEND}/order/${getUserId}`)
//       .then((response) => setOrder(response.data.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const calculateTotal = () => {
//     let totalOrderCart = 0;
//     order.map((item) => (totalOrderCart += item.total_order));
//     return totalOrderCart;
//   };

//   const formatRp = (bilangan) => {
//     var reverse = bilangan.toString().split("").reverse().join(""),
//       ribuan = reverse.match(/\d{1,3}/g);
//     ribuan = ribuan.join(".").split("").reverse().join("");
//     return ribuan;
//   };

//   let Delivery = 50000;
  return (
    <>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="paymentModelLabel">
              Payment
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p style={{ color: "black", fontWeight: "bold" }}>Payment method</p>
            <div className="row">
              <div className="col-md-3 col-3  mt-2">
                <img
                  src={require("../../assets/img/Logo-GoPay-Vector-CDR-dan-PNG 1.png")}
                />
              </div>
              <div className="col-md-6 col-5 ">
                <p
                  style={{
                    paddingTop: 9,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Gopay
                </p>
              </div>
              <div className="col-md-3 col-4  mt-2">
                <input
                  className="form-check-input"
                  style={{ margin: "5px 20px", marginLeft: 70 }}
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-3">
                <img
                  src={require("../../assets/img/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.png")}
                />
              </div>
              <div className="col-md-6 col-5 mt-2">
                <p style={{ color: "black", fontWeight: "bold" }}>
                  Pos Indonesia
                </p>
              </div>
              <div className="col-md-3 col-4 mt-2">
                <input
                  className="form-check-input"
                  style={{ margin: "5px 20px", marginLeft: 70 }}
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-3">
                <img src={require("../../assets/img/mastercard.png")} />
              </div>
              <div className="col-md-6  col-5 mt-2">
                <p style={{ color: "black", fontWeight: "bold" }}>Mastercard</p>
              </div>
              <div className="col-md-3  col-4 mt-2">
                <input
                  className="form-check-input"
                  style={{ margin: "5px 20px", marginLeft: 70 }}
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12 ">
                <p
                  style={{
                    paddingTop: 15,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Shopping summary
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-6">
                <p
                  style={{
                    color: "#9B9B9B",
                    fontWeight: "bold",
                  }}
                >
                  Order
                </p>
              </div>
              <div className="col-md-6 col-6">
                <p
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    textAlign: "right",
                    padding: "0 10px 0 0",
                  }}
                >
                  {/* Rp. {formatRp(calculateTotal())} */}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-6">
                <p
                  style={{
                    color: "#9B9B9B",
                    fontWeight: "bold",
                  }}
                >
                  Delivery
                </p>
              </div>
              <div className="col-md-6 col-6">
                <p
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    textAlign: "right",
                    padding: "0 10px 0 0",
                  }}
                >
                  {/* Rp. {formatRp(Delivery)} */}
                </p>
              </div>
            </div>
          </div>
          <div
            className="modal-footer"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <p
                style={{
                  paddingTop: "-20px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Shopping summary
              </p>
              <p
                style={{
                  color: "#ff0000",
                  fontWeight: "bold",
                  padding: "0 10px 0 0",
                }}
              >
                {/* Rp. {formatRp(Delivery + calculateTotal())} */}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-danger rounded-pill btn-cm"
              id="btn-danger-small"
              style={{ width: 160 }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPayment;