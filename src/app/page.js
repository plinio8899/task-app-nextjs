"use client";
import React from "react";
import { UseTask } from "../context/taskContext";
import { TaskCard } from "../components/TaskCard";
import { keys } from "@material-ui/core/styles/createBreakpoints";

function Page() {
  const { tasks } = UseTask();
  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        {tasks.map((task, i) => TaskCard(task))}
      </div>
    </div>
  );
}

export default Page;
