import React from "react";
import { useProduct } from "../context/ProductContext";

const HeadList = ({ el }) => {
  const { del } = useProduct();
  return (
    <div id="headlist">
      <div className="container">
        <div className="head_list">
          <div className="block_head">
            <img src={el.image} alt="" />
            <h2>{el.name}</h2>
            <button onClick={() => del(el.id)}>del</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadList;
