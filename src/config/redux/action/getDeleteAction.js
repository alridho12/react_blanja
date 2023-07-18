import axios from "axios";


const getDeleteAction =(product_id)=>async(dispatch)=> {
    try {
        await axios.delete(`http://localhost:3000/products/${product_id}`);
        dispatch({ type: "DELETE_PRODUCT", payload: product_id });
      } catch (err) {
        console.log(err);
      }
}

export default getDeleteAction