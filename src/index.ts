import { Engine } from "@/engine";

declare global {
  interface Window {
    engine: Engine;
  }
}

(() => {
  const engine = new Engine();

  window.addEventListener("DOMContentLoaded", () => {
    engine;
  });

  window.addEventListener("keydown", (event) => {
    engine.update(event);
  });
})();
