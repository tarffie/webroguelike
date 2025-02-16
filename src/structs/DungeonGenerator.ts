import { CHARACTER_TILES } from "@/enums/character_tiles";
import { getRndInteger } from "@/utils/mathematics";

class DungeonGenerator {
  private levels: unknown[];
  private roomList: unknown[];
  private corridorList: unknown[];
  private tileLevels: unknown[];
  private tiles = CHARACTER_TILES;

  constructor(
    private height = 40,
    private width = 80,
    private maxRooms = 10,
    private minRooms = 1,
    private minRoomXY = 5,
    private maxRoomXY = 10,
    private roomsOverlap = false,
    private randomConnections = 1,
    private randomSpurs = 3,
  ) {
    this.height = height;
    this.width = width;
    this.maxRooms = maxRooms;
    this.minRooms = minRooms;
    this.minRoomXY = minRoomXY;
    this.maxRoomXY = maxRoomXY;
    this.roomsOverlap = roomsOverlap;
    this.randomConnections = randomConnections;
    this.randomSpurs = randomSpurs;
    this.levels = [];
    this.roomList = [];
    this.corridorList = [];
    this.tileLevels = [];
  }

  generateRoom() {
    let x = 0; // 0
    let y = 0; // 1
    let w = 0; // 2
    let h = 0; // 3

    w = getRndInteger(this.minRoomXY, this.maxRoomXY);
    h = getRndInteger(this.minRoomXY, this.maxRoomXY);
    x = getRndInteger(1, this.width - w - 1);
    y = getRndInteger(1, this.height - h - 1);

    return [x, y, w, h];
  }

  roomOverlaping(room: number[], roomList: number[]) {
    let x: number = room[0]; // [0]
    let y: number = room[1]; // [1]
    let w: number = room[2]; // [2]
    let h: number = room[3]; // [3]

    for (let currentRoom in roomList) {
      if (
        x > roomList[0] + roomList[2] &&
        Number(currentRoom[0]) < x + w &&
        y < roomList[1] + roomList[3] &&
        Number(currentRoom[1]) < y + h
      ) {
        return true;
      }
      return false;
    }
  }

  corridorBetweenPoints(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    joinType = "either",
  ) {
    if ((x1 === x2 && y1 === y2) || x1 === x2 || y1 === y2)
      return [(x1, y1), (x2, y2)];
    else {
      // 2 corridors
      let join: string | undefined = undefined;

      if (
        joinType === "either" &&
        new Set([0, 1]).intersection(new Set([y1, y2]))
      ) {
        join = "bottom";
      } else if (
        (joinType === "either" &&
          new Set([this.width - 1, this.width - 2]).intersection(
            new Set([x1, x2]),
          )) ||
        new Set([this.height - 1, this.height - 2]).intersection(
          new Set([y1, y2]),
        )
      ) {
        join = "top";
      } else if (joinType === "either") {
        join = Math.round(Math.random()) !== 0 ? "top" : "bottom";
      } else {
        join = joinType;
      }
    }
  }
}

export { DungeonGenerator };
