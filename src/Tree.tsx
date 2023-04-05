import { useState } from "react";

interface TreeProps {
  name: string;
  spend: number;
  id: string;
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
}

const Tree: React.FC<TreeProps> = ({ id, BCAP1, BCAP2, BCAP3 }: TreeProps) => {
  const [isChildOneCollapsed, setIsChildOneCollapsed] = useState(true);
  const [isChildTwoCollapsed, setIsChildTwoCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsChildOneCollapsed(!isChildOneCollapsed);
    if (!isChildOneCollapsed) {
      setIsChildTwoCollapsed(true);
    }
  };

  return (
    <div>
      <div key={id} style={{ padding: 5 }}>
        <div
          onClick={() => handleCollapse()}
          style={{ cursor: "pointer", padding: 5, marginRight: 10 }}
        >
          <span style={{marginRight: 10}}>{isChildOneCollapsed ? "▲" : "▼"}</span>
          {BCAP1}
        </div>
        <div>
          {!isChildOneCollapsed && (
            <div
              onClick={() => setIsChildTwoCollapsed(!isChildTwoCollapsed)}
              style={{ cursor: "pointer", padding: 5 }}
            >
              <div style={{ marginLeft: 10, marginRight: 5 }}>
                {isChildTwoCollapsed ? "▲" : "▼"}
                {BCAP2}
              </div>
            </div>
          )}
        </div>

        {!isChildTwoCollapsed && (
          <div style={{ marginLeft: 30, padding: 5 }}>{BCAP3}</div>
        )}
      </div>
    </div>
  );
};

export default Tree;
