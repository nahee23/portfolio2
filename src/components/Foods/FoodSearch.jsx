import React from "react";
import PropTypes from "prop-types";

function FoodSearch({
  selectedRegion, // 현재 선택된 지역
  setSelectedRegion, // 지역 선택을 업데이트하는 함수
  searchKeyword, // 현재 입력된 검색 키워드
  setSearchKeyword, // 검색 키워드를 업데이트하는 함수
  handleSearchSubmit, // 검색 제출 핸들러
  handleClearFilters, // 필터 초기화 핸들러
}) {
  // 지역 리스트
  const regions = [
    "서울특별시",
    "부산광역시",
    "경기도",
    "대구광역시",
    "울산광역시",
    "경상남도",
    "경상북도",
    "인천광역시",
    "전라남도",
    "전라북도",
    "광주광역시",
    "충청남도",
    "충청북도",
    "강원도",
    "세종광역시",
    "대전광역시",
    "제주특별자치도",
  ];

  // 지역 버튼 클릭 핸들러
  const handleRegionClick = (region) => {
    setSelectedRegion(region); // 지역 상태 업데이트
    handleSearchSubmit(); // 이벤트 객체 없이 호출
  };

  return (
    <div className="flex flex-col items-center mb-8 gap-8">
      {/* 검색 및 지역 선택 */}
      <div className="flex justify-center w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchSubmit();
          }}
          className="w-full max-w-2xl"
        >
          <div className="form-control">
            <div className="relative flex items-center space-x-4">
              {/* 검색 입력 */}
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={searchKeyword} // 현재 검색 키워드 상태
                onChange={(e) => setSearchKeyword(e.target.value)} // 상태 업데이트
              />

              {/* 필터 초기화 버튼 */}
              <button
                onClick={handleClearFilters} // 필터 초기화 핸들러 호출
                className="rounded-1 w-36 btn btn-lg ml-4"
              >
                Clear
              </button>
            </div>
            <div className="flex flex-wrap mt-4 space-x-2 justify-center">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => handleRegionClick(region)} // 지역 선택
                  className={`px-3 py-1 border rounded m-2 ${
                    selectedRegion === region
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
FoodSearch.propTypes = {
  selectedRegion: PropTypes.string.isRequired,
  setSelectedRegion: PropTypes.func.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  setSearchKeyword: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleClearFilters: PropTypes.func.isRequired,
};

export default FoodSearch;
