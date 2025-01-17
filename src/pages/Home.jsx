import { useState } from "react";
import FoodMain from "../components/Foods/FoodMain";
import FoodResult from "../components/Foods/FoodResult";
import FoodSearch from "../components/Foods/FoodSearch";
import { useFood } from "../context/FoodContext";
import React from "react";

function Home() {
  const { category2 } = useFood(); // 선택된 음식 상태 가져오기

  const [selectedRegion, setSelectedRegion] = useState(""); // 선택된 지역
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색 키워드

  // 검색 제출 핸들러
  const handleSearchSubmit = (e) => {
    if (e?.preventDefault) {
      e.preventDefault(); // 이벤트 객체가 있을 경우에만 실행
    }
    // 검색 처리 로직
    console.log("Search Submitted");
  };

  // 필터 초기화 핸들러
  const handleClearFilters = () => {
    setSelectedRegion("");
    setSearchKeyword("");
  };

  return (
    <div>
      {!category2 ? (
        <>
          <FoodMain /> {/* 음식 목록 */}
        </>
      ) : (
        <>
          <FoodSearch
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            handleSearchSubmit={handleSearchSubmit}
            handleClearFilters={handleClearFilters}
          />{" "}
          {/* 검색 UI */}
          <FoodResult
            selectedRegion={selectedRegion}
            searchKeyword={searchKeyword}
          />{" "}
          {/*// 선택된 음식 상세 정보*/}
        </>
      )}
    </div>
  );
}

export default Home;
