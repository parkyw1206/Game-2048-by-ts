import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../util/keyboard";
import { TileType } from "../type/tile";
import { makeTile, moveTile } from "../util/tile";

export default function useMoveTile(req: {
  tileList: TileType[];
  setTileList: any;
  setScore: any;
}) {
  function moveAndAdd(req1: { x: number; y: number }) {
    const newTileList = moveTile({
      tileList: req.tileList,
      x: req1.x,
      y: req1.y,
    });
    const newTile = makeTile(newTileList);
    newTileList.push({ ...newTile, isNew: true });
    const score = newTileList.reduce((acc, item) => {
      if (item.isMerged) {
        return acc + item.value;
      } else return acc;
    }, 0);
    req.setScore((scoreSoFar: number) => scoreSoFar + score);
    req.setTileList(newTileList);
  }
  function moveUp() {
    moveAndAdd({ x: 0, y: -1 });
  }
  function moveDown() {
    moveAndAdd({ x: 0, y: 1 });
  }
  function moveLeft() {
    moveAndAdd({ x: -1, y: 0 });
  }
  function moveRight() {
    moveAndAdd({ x: 1, y: 0 });
  }
  useEffect(() => {
    addKeyObserver("up", moveUp);
    addKeyObserver("down", moveDown);
    addKeyObserver("left", moveLeft);
    addKeyObserver("right", moveRight);
    return () => {
      removeKeyObserver("up", moveUp);
      removeKeyObserver("down", moveDown);
      removeKeyObserver("left", moveLeft);
      removeKeyObserver("right", moveRight);
    };
  }, [req.tileList, req.setTileList]);
}
