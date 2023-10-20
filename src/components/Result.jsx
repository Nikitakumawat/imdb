import React from "react";

export default function Result({ results }) {
  return (
    <div>
      {results.map((curr) => (
        <div key={curr.id}>{curr.original_title}</div>
      ))}
    </div>
  );
}
