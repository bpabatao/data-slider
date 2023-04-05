import React, { useState, useEffect } from "react";
import SliderFilter from "./SliderFilter";
import Tree from "./Tree";
import TreeDetails from "./TreeDetails";

interface DataProps {
  name: string;
  spend: number;
  id: string;
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
  index?: number;
  child?: {
    spend: number;
  };
}

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  const [range, setRange] = useState<number | string>(0);

  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
  };

  const minSpend = data
    .filter((child: DataProps) => child.spend >= range)
    .map((child: DataProps) => child.spend)
    .reduce((min: number, spend: number) => Math.min(min, spend), 0);

  const maxSpend = data
    .filter((child: DataProps) => child.spend >= range)
    .map((child: DataProps) => child.spend)
    .reduce((max: number, spend: number) => Math.max(max, spend), 0);

  const children = data.filter((child: DataProps) => child.spend <= range);

  const renderTree = (capabilities: DataProps[]) => {
    return (
      <>
        {capabilities.map((capability: DataProps, index: number) => (
          <div key={capability.id}>
            <Tree {...capability} />
          </div>
        ))}
      </>
    );
  };

  const renderTreeDetails = (capabilities: DataProps[]) => {
    return (
      <>
        {capabilities.map((capability: DataProps, index: number) => (
          <TreeDetails {...capability} index={index} />
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Navigation</h1>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10rem" }}>
          {children.length > 0 && renderTree(children)}
        </div>

        <div style={{ border: "1px solid black", marginRight: 20 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 4fr)",
            gridGap: 10,
          }}
        >
          {children.length > 0 && renderTreeDetails(children)}
        </div>
      </div>

      <div style={{ border: "1px solid black", width: "22rem" }} />

      <SliderFilter
        minSpend={minSpend}
        maxSpend={maxSpend}
        range={range}
        handleRange={handleRange}
      />
    </>
  );
}

export default App;
