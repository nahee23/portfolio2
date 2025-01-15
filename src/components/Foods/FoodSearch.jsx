import React, { useState } from "react";

function FoodSearch() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("내용을 입력해주세요");
    } else {
      //유저찾기
      console.log(text);
      setText("");
    }
  };
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 
              lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative flex items-center space-x-4">
              <select className="select select-bordered w-1/3 max-w-xs">
                <option disabled selected>
                  지역
                </option>
                <option>서울특별시</option>
                <option>부산광역시</option>
                <option>경기도</option>
                <option>대구광역시</option>
                <option>울산광역시</option>
                <option>경상남도</option>
                <option>경상북도</option>
                <option>인천광역시</option>
                <option>전라남도</option>
                <option>전라북도</option>
                <option>광주광역시</option>
                <option>충청남도</option>
                <option>충청북도</option>
                <option>강원도</option>
                <option>세종광역시</option>
                <option>대전광역시</option>
                <option>제주특별자치도</option>
              </select>
              <input
                type="text"
                className="w-2/3 pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className="btn btn-ghost btn-lg">Clear</button>
      </div>
    </div>
  );
}

export default FoodSearch;
