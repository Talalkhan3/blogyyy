"use client";

import React, { useState } from "react";

export default function Amazebtn() {
  const [Amazebtn, setAmazebtn] = useState(0);
  return (
    <button
      onClick={() => {
        setAmazebtn(Amazebtn + 1);
      }}
      className="bg-yellow-500 text-white py-2 px-5 mt-10 rounded font-medium"
    >
      Amazing <span>{Amazebtn}</span>
    </button>
  );
}
