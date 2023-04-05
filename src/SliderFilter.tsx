import React from "react";

interface SliderFilterProps {
  minSpend: number;
  maxSpend: number;
  range: string | number;
  handleRange: React.ChangeEventHandler;
}

const SliderFilter: React.FC<SliderFilterProps> = ({
  minSpend,
  maxSpend,
  range,
  handleRange,
}: SliderFilterProps) => {
  return (
    <div>
      <h2>Filters</h2>
      <h4 style={{ color: "gray" }}>Spending</h4>

      <input
        type="range"
        min={minSpend}
        max={maxSpend}
        value={range}
        onChange={handleRange}
        style={{ width: "15rem" }}
      />

      <h3>{`Spending Range: $${range}`}</h3>
    </div>
  );
};

export default SliderFilter;
