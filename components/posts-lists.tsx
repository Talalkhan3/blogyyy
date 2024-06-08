import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default async function Postslists() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();
  return (
    <ul className="flex flex-col  gap-y-5">
      {posts.map((post) => (
        <li
          key={post.id}
          className="text-left px-5 bg-gray-900 py-3 rounded-md shadow-sm"
        >
          <div className="flex justify-between items-center py-3">
            <div className="flex md:items-center gap-x-2">
              <p className="text-gray-400">#{post.id}</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-gray-100 text-lg font-semibold md:text-2xl md:font-bold max-w-[280px] md:max-w-full"
              >
                {post.title}
              </Link>
            </div>

            <Link href={`/posts/${post.id}`}>
              <Button variant={"secondary"} className=" text-sm font-medium ">
                Read More
              </Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
