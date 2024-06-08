import Postslists from "@/components/posts-lists";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="text-center pt-20 px-5 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-20">
        Let&#39;s Invest 😉
      </h1>
      <Suspense fallback="Wait a second it's Loading...">
        <Postslists />
      </Suspense>
    </div>
  );
}
