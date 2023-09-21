import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../Constant";
import { getInitailizeTileList } from "../util/tile";
import { TileType } from "../type/tile";
import "../index.css";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

interface Iprops {
  setScore: (score: number) => void;
}
export default function Game({ setScore }: Iprops) {
  const [tileList, setTileList] = useState<TileType[]>(getInitailizeTileList);
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, (index) => (
          <div key={index} className="grid-row">
            {times(MAX_POS, (index2) => (
              <div key={index2} className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="tile-container">
        {tileList.map((item) => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
