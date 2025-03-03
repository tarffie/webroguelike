import * as ROT from "rot-js";

import { Player } from "@/player";
import { WIDTH, HEIGHT } from "@/globals";
import { handleInput, MovementAction } from "@/input-handler";

class Engine {
  display: ROT.Display;

  player: Player;

  constructor() {
    this.player = new Player();
    this.display = new ROT.Display({
      width: WIDTH,
      height: HEIGHT,
    });

    const container = this.display.getContainer()!;
    document.body.appendChild(container);

    this.render();
  }

  update(event: KeyboardEvent) {
    this.display.clear();
    const action = handleInput(event);

    if (action instanceof MovementAction) {
      this.player.X += action.dx;
      this.player.Y += action.dy;
    }
    this.render();
  }

  render() {
    this.display.draw(this.player.X, this.player.Y, "@", "#fff", "#000");
  }
}

export { Engine };
