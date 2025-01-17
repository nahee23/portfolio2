import React, { useEffect } from "react";
import PropTypes from "prop-types";

function MapModal({ coordinates, onClose }) {
  const extractCoordinates = (coordinateString) => {
    const regex = /[+-]?\d+(\.\d+)?/g;
    const matches = coordinateString.match(regex);
    return matches ? matches.map(Number) : [];
  };

  const [lat, lng] = extractCoordinates(coordinates);

  useEffect(() => {
    if (lat && lng) {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer, mapOption); // 정적 지도 생성

      const markerPosition = new kakao.maps.LatLng(lat, lng);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    }
  }, [lat, lng]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-end p-2">
          <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
            ✕
          </button>
        </div>
        <div id="map" className="w-full h-96"></div>
      </div>
    </div>
  );
}

MapModal.propTypes = {
  coordinates: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MapModal;
