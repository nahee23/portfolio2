import React from "react";

function FoodItem({ food }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={food.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{food.title}</h2>
          <p>{food.address}</p>
          {/* <Link
            className="text-base-content text-opacity-40"
            to={`/food/${food.login}`}
          >
            지도 보기
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
