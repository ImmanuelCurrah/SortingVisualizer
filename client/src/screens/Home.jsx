import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <select
        onChange={(e) => {
          navigate(`/${e.target.value}`);
        }}
      >
        <option>Select One</option>
        <option>Selection Sort</option>
        <option>Bubble Sort</option>
        <option>Insertion Sort</option>
      </select>
    </div>
  );
}
