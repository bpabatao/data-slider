import React from "react";

interface TreeDetailsProps {
  name: string;
  spend: number;
  id: string;
  index?: number;
}

const TreeDetails: React.FC<TreeDetailsProps> = ({
  name,
  spend,
}: TreeDetailsProps) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "12rem",
        height: "8rem",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
      <p>Total Spent: ${spend}</p>
    </div>
  );
};

export default TreeDetails;
