"use client"

import React, { useState } from "react";

export default function Failedbtn() {
  const [failedbtn, setFailedbtn] = useState(0);
  return (
    <button
      onClick={() => {
        setFailedbtn(failedbtn + 1);
      }}

      className="bg-red-500 text-white py-2 px-5 mt-10 rounded font-medium"
    >
      Failed <span>{failedbtn}</span>
    </button>
  );
}
