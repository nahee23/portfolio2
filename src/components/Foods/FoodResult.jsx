import React from "react";
import { useFood } from "../../context/FoodContext";
import Spinner from "../layout/Spinner";
import FoodItem from "./FoodItem";

function FoodResult() {
  const { foods, loading, category2, setCategory2 } = useFood(); // Context에서 상태 가져오기

  if (loading) {
    return <Spinner />;
  }
  const filteredFoods = foods.filter((food) => food.category2 === category2);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {filteredFoods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
      <button
        onClick={() => setCategory2(null)}
        className="btn btn-ghost btn-lg  bg-gray-200" // 뒤로 가기
        style={{
          marginBottom: "10px",
          padding: "5px 10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back to Food List
      </button>
    </div>
  );
}

export default FoodResult;
