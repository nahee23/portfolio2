import React, { createContext, useState, useContext, useEffect } from "react";

// Context 생성
const FoodContext = createContext();

// Provider 정의
export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category2, setCategory2] = useState(null);

  // API 호출 로직
  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          "http://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=ed933865-e90a-4e14-9ec3-9707d14f5a69&numOfRows=1000&pageNo=1",
          requestOptions
        );

        const data = await response.json();
        setFoods(data.response.body.items.item);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []); // 최초 로드 시 실행

  return (
    <FoodContext.Provider value={{ foods, loading, category2, setCategory2 }}>
      {children}
    </FoodContext.Provider>
  );
};

// Custom Hook
export const useFood = () => useContext(FoodContext);
