import FoodMain from "../components/Foods/FoodMain";
import FoodResult from "../components/Foods/FoodResult";
import FoodSearch from "../components/Foods/FoodSearch";
import { useFood } from "../context/FoodContext";

function Home() {
  const { category2 } = useFood(); // 선택된 음식 상태 가져오기

  return (
    <div>
      {!category2 ? (
        <>
          <FoodMain /> {/* 음식 목록 */}
        </>
      ) : (
        <>
          <FoodSearch /> {/* 검색 UI */}
          <FoodResult /> {/*// 선택된 음식 상세 정보*/}
        </>
      )}
    </div>
  );
}

export default Home;
