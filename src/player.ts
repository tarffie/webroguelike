import { WIDTH, HEIGHT } from "@/globals";

class Player {
  public X: number;
  public Y: number;

  constructor() {
    this.X = WIDTH / 2;
    this.Y = HEIGHT / 2;
  }
}

export { Player };
