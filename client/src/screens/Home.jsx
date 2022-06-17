import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-4">
        Welcome to Sorting Visualizer
      </h1>
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
