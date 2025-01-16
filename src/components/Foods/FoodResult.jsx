import React, { useState } from "react";
import { useFood } from "../../context/FoodContext";
import Spinner from "../layout/Spinner";
import FoodItem from "./FoodItem";

function FoodResult({ selectedRegion, searchKeyword }) {
  const { foods, loading, category2, setCategory2 } = useFood(); // Context에서 상태 가져오기
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 16; // 페이지당 항목 수
  const maxPageNumbersToShow = 5; // 한 번에 표시할 페이지 번호의 최대 수

  if (loading) {
    return <Spinner />;
  }

  // 주소에서 시/도 추출
  const extractRegion = (address) => {
    // 정규식을 사용하여 숫자와 괄호를 제거
    const cleanedAddress = address.replace(/^\(\d+\)/, "").trim();
    // 공백을 기준으로 분할하여 시/도 추출
    const parts = cleanedAddress.split(" ");
    return parts.length > 1 ? parts[0] : "";
  };

  // category2에 따라 필터링된 음식 데이터
  const filteredFoods = foods.filter((food) => food.category2 === category2);

  // 지역 및 검색 조건 추가 적용
  const finalFilteredFoods = filteredFoods.filter((food) => {
    const matchesRegion = selectedRegion
      ? extractRegion(food.address) === selectedRegion
      : true; // 지역 필터 조건

    const matchesKeyword = searchKeyword
      ? food.title.toLowerCase().includes(searchKeyword.toLowerCase())
      : true; // 검색 키워드 조건

    return matchesRegion && matchesKeyword; // 두 조건 모두 만족
  });

  // 총 페이지 수 계산 (필터링된 데이터 기준)
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  // 현재 페이지의 음식 데이터 계산 (필터링된 데이터 기준으로 슬라이스)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFoods = finalFilteredFoods.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 페이지 이동 핸들러
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 페이지 번호 범위 계산
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxPageNumbersToShow / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (startPage > 1) {
      pages.push(1); // 첫 페이지
      if (startPage > 2) {
        pages.push("..."); // 생략 표시
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("..."); // 생략 표시
      }
      pages.push(totalPages); // 마지막 페이지
    }

    return pages;
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {currentFoods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
      {/* 페이지 네비게이션 */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-center items-center space-x-2">
          {/* 이전 버튼 */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          {/* 페이지 번호 */}
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-3 py-1">
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            )
          )}

          {/* 다음 버튼 */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* 뒤로 가기 버튼 */}
        <div className="mt-4">
          <button
            onClick={() => setCategory2(null)}
            className="btn btn-ghost btn-lg bg-gray-200"
            style={{
              marginBottom: "10px",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Back to List
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodResult;
