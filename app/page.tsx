import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center my-auto px-5 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Welcome to Blogyy 👋
      </h1>
      <p className="max-w-[750px] mx-auto leading-7">
        The ultimate platform where innovation meets investment. Blogyy is
        designed for visionary entrepreneurs to pitch their groundbreaking ideas
        and for affluent investors to discover and fund the next big thing. Our
        platform creates a dynamic ecosystem where creative minds can connect
        with capital, fostering the growth of transformative projects across
        various industries. Whether you&#39;re developing a tech startup, a
        sustainable venture, or an innovative product, Blogyy provides the
        perfect stage to showcase your ideas to a community of eager investors.
      </p>
      <div className="flex justify-center gap-5 mt-10">
        <Link href={"/create-post"}>
          <Button>Create your next Idea</Button>
        </Link>
        <Link href={"/posts"}>
          <Button variant={"secondary"}>View All Idea&#39;s</Button>
        </Link>
      </div>
    </main>
  );
}
