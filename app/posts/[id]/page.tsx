import Amazebtn from "@/components/Amazebtn";
import Failedbtn from "@/components/failedbtn";
import Upvotebtn from "@/components/upvote-btn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }

  return (
    <div className=" px-10 sm:px-20 pt-24">
      <p className="text-xl font-bold text-gray-300">{post.id}</p>
      <h1 className="font-bold text-3xl md:text-6xl">{post.title}</h1>
      <p className="max-w-full mt-10 text-[18px]">{post.body}</p>
      <div className="flex gap-2 justify-end">
        <Upvotebtn />
        <Amazebtn />
        <Failedbtn />
      </div>
    </div>
  );
}
