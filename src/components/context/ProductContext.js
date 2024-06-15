import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  async function create(newProduct) {
    await axios.post(API, newProduct);
    read();
  }

  async function read() {
    const res = await axios(API);
    setData(res.data);
  }

  async function del(id) {
    const res = await axios.delete(`${API}/${id}`);
    read();
  }
  const values = {
    create,
    read,
    data,
    del,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
