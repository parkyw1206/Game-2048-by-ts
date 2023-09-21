import React from "react";
import { TileType } from "../type/tile";
import cn from "classnames";

export default function Tile(item: TileType) {
  return (
    <div
      key={item.id}
      className={cn(
        `tile tile-${item.value} tile-position-${item.x + "-" + item.y}`,
        { "tile-merged": item.isMerged, "tile-new": item.isNew }
      )}
    >
      <div className="tile-inner">{item.value}</div>
    </div>
  );
}
