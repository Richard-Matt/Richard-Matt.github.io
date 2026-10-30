import React, { useMemo } from 'react';

function buildBranches() {
  const lines = [];
  const grow = (x, y, angle, length, depth, seed) => {
    if (depth === 0 || length < 3) return;
    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;
    lines.push({ x1: x, y1: y, x2: endX, y2: endY, depth, seed });

    const spread = 0.47 + ((seed * 17) % 9) * 0.018;
    const nextLength = length * (0.71 + ((seed * 13) % 5) * 0.012);
    grow(endX, endY, angle - spread, nextLength, depth - 1, seed + 1);
    grow(endX, endY, angle + spread, nextLength, depth - 1, seed + 3);
    if (depth > 5 && seed % 2 === 0) {
      grow(endX, endY, angle + 0.04, length * 0.65, depth - 2, seed + 5);
    }
  };

  grow(300, 370, -Math.PI / 2, 112, 8, 1);
  return lines;
}

export default function BranchTree() {
  const branches = useMemo(buildBranches, []);
  return (
    <svg
      className="branch-tree"
      viewBox="0 0 600 390"
      role="img"
      aria-label="An original branching line illustration representing curiosity and growth"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {branches.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            strokeWidth={line.depth > 5 ? 1.15 : 0.72}
            opacity={0.46 + line.depth * 0.055}
            className="tree-branch"
            style={{ animationDelay: `${Math.min(index * 5, 1100)}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}
