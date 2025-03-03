export interface Action {}

export class MovementAction implements Action {
  dx: number;
  dy: number;

  public constructor(dx: number, dy: number) {
    this.dx = dx;
    this.dy = dy;
  }
}

interface MovimentMap {
  [key: string]: Action;
}

const MOVE_KEYS: MovimentMap = {
  ArrowUp: new MovementAction(0, -1),
  ArrowDown: new MovementAction(0, 1),
  ArrowLeft: new MovementAction(-1, 0),
  ArrowRight: new MovementAction(1, 0),
};

export function handleInput(event: KeyboardEvent): Action {
  return MOVE_KEYS[event.key];
}
