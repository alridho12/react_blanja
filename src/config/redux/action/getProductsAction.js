import axios from "axios"


const getProductAction = () => async (dispatch) => {
    const login = localStorage.getItem('id')
    try {
        const products = await axios.get(`${process.env.REACT_APP_API_KEY}/products/seller/${login}`);
        const result = products.data.data
        dispatch({ type: "GET_ALL_PRODUCT", payload: result })
    } catch (err) {
        console.log(err);
    }
}

export default getProductAction