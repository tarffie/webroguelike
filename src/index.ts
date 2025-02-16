import { DungeonGenerator } from "@/structs/DungeonGenerator";

(() => {
  const game = <HTMLCanvasElement>document!.getElementById("game");
  const ctx = game.getContext("2d");

  ctx!.fillStyle = "red";
  ctx!.fillRect(10, 10, 150, 100);

  const dg = new DungeonGenerator();
  console.log(dg.generateRoom());
})();
