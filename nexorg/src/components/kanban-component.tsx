"use client";

import { useState } from "react";
import {
  KanbanProvider,
  KanbanBoard,
  KanbanHeader,
  KanbanCards,
  KanbanCard,
} from "@/components/ui/shadcn-io/kanban/index";

export default function Kanban() {
  const columns = [
    { id: "todo", name: "To Do" },
    { id: "in-progress", name: "In Progress" },
    { id: "done", name: "Done" },
  ];

  const [data, setData] = useState([
    { id: "1", name: "Math Homework", column: "todo" },
    { id: "2", name: "Science Project", column: "in-progress" },
    { id: "3", name: "Read Book", column: "done" },
  ]);

  return (
    <div className="p-6">
      <KanbanProvider
        columns={columns}
        data={data}
        onDataChange={setData}
      >
        {(column) => (
          <KanbanBoard key={column.id} id={column.id}>
            <KanbanHeader>{column.name}</KanbanHeader>
            <KanbanCards id={column.id}>
              {(item) => (
                <KanbanCard key={item.id} {...item}>
                  {item.name}
                </KanbanCard>
              )}
            </KanbanCards>
          </KanbanBoard>
        )}
      </KanbanProvider>
    </div>
  );
}
