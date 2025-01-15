import React from "react";
import { useFood } from "../../context/FoodContext";
import china from "../layout/assets/free-icon-china-9906454.png";
import vietnam from "../layout/assets/free-icon-vietnam-flag-11654508.png";
import UK from "../layout/assets/free-icon-united-kingdom-197374.png";
import india from "../layout/assets/free-icon-india-flag-4852767.png";
import USA from "../layout/assets/free-icon-flag-13980278.png";
function FoodMain() {
  const { setCategory2 } = useFood();
  const foodList = [
    { id: 1, name: "동아시아음식", image: china },
    { id: 2, name: "동남아시아음식", image: vietnam },
    { id: 3, name: "유럽음식", image: UK },
    { id: 4, name: "인도아시아음식", image: india },
    { id: 5, name: "북미음식", image: USA },
    { id: 6, name: "남미음식", image: USA }, // 남미음식의 이미지를 추가하세요
  ];

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {foodList.map((food) => (
        <div
          key={food.id}
          onClick={() => setCategory2(food.name)} // 클릭 시 선택된 음식 업데이트
          className="card bg-base-100 shadow-md hover:shadow-lg cursor-pointer"
        >
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                  <img src={food.image} alt={food.name} />
                </div>
              </div>
            </div>
            <div>
              <h2 className="card-title">{food.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodMain;
