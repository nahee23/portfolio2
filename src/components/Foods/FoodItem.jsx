import React from "react";
import PropTypes from "prop-types";
import profile from "../layout/assets/free-icon-warehouse-7615695.png";

function FoodItem({ food, onClick }) {
  return (
    <div className="card shadow-md compact side bg-base-100" onClick={onClick}>
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={profile} alt="Profile" />
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

FoodItem.propTypes = {
  food: PropTypes.shape({
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FoodItem;
