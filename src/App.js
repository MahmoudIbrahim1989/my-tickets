import React from "react";
import SubLoad from "./components/subload";
import "./App.css";

const myArray = {
  name: "Ticket 1",
  Priority: "high",
  Status: "finished",
  Description:
    "Based on this information we need to implement a page to list tickets.",
};

const newData = Array(100001).fill(myArray);

const List = () => (
  <div className="list">
    {newData.map((item, index) => (
      <>
        <SubLoad
          containerSelector={".list"}
          key={index}
          itemSubject={item.name}
          itemPriority={item.Priority}
          itemStatus={item.Status}
          itemDescription={item.Description}
        />
      </>
    ))}
  </div>
);

export default List;
