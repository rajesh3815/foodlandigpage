import React, { useState } from "react";
import Style from "./Articles.module.css";
import { articleArray } from "../../util/article";
import forward from "../../assets/forward.svg";
import backward from "../../assets/back.png";
const Articles = () => {
  const [articls, setArticle] = useState(articleArray);
  const [current, setCurrent] = useState(1);
  const [perPage, setPerpage] = useState(3);

  let endIndex = perPage * current;
  let startIndex = endIndex - perPage;
  const totalPage = articls?.length / perPage;
  const previousHandeler = () => {
    if (totalPage && current > 1) {
      setCurrent(current - 1);
    }
  };
  const forwardHandeler = () => {
    if (totalPage && current < totalPage) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className={Style.mainContainer}>
      <p className={Style.header}>Latest Articles</p>
      <div className={Style.articleDiv}>
        {articls?.slice(startIndex, endIndex)?.map((item, idx) => {
          return (
            <div className={Style.card} key={idx}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>Read More</button>
            </div>
          );
        })}
      </div>
      <div className={Style.btnDiv}>
        <button disabled={current === 1} onClick={previousHandeler}>
          <img src={backward} alt="" />
        </button>
        <p>
          {!articls?.length || articls?.length < perPage
            ? current
            : `${current}/${articls?.length / perPage}`}
        </p>

        <button disabled={current === totalPage} onClick={forwardHandeler}>
          <img src={forward} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Articles;
