import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import HeadList from "./HeadList";

const HeroHead = () => {
  const { create, read, data } = useProduct();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function add() {
    let newObj = {
      name: name,
      image: image,
    };

    create(newObj);
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="block">
            <div className="block_in">
              <h2>Все персонажи Аниме </h2>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button onClick={add}>create</button>
          </div>
        </div>
        <div className="head_data">
          {data.map((el) => (
            <HeadList el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroHead;
