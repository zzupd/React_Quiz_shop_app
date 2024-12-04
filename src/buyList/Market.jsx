import React from "react";
import Goods from "./Goods";

// 상위 컴퍼넌트
function Market(props) {
  return (
    <div>
      <Goods name="오렌지" num={3} priceSum={3600} />
      <Goods name="우유" num={1} priceSum={2100} />
      <Goods name="샌드위치" num={1} priceSum={4000} />
    </div>
  );
}

export default Market;
