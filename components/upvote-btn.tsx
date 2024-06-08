"use client";

import { useState } from "react";

export default function Upvotebtn() {
  const [Upvotebtn, setUpvoteCount] = useState(0);
  return (
    <button
      onClick={() => {
        setUpvoteCount(Upvotebtn + 1);
      }}
      className="bg-green-500 text-white py-2 px-5 mt-10 rounded font-medium"
    >
      Investing <span>{Upvotebtn}</span>
    </button>
  );
}
