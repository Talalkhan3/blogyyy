import { createPost } from "@/actions/action";
import React from "react";
import { Button } from "./ui/button";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-5 mt-10 my-2"
    >
      <div className="w-full">
        <h1 className="text-left px-2 text-lg font-bold">Idea</h1>
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-3 h-10 w-full"
          required
        />
      </div>
      <div>
        <h1 className="text-left px-2 text-lg font-bold">Description</h1>
        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3 py-2 w-full"
          rows={10}
          required
        />
      </div>

      <Button className="h-10 px-5 rounded text-white">
        Submit
      </Button>
    </form>
  );
}
