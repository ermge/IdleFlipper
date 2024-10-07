import { Renderer } from "./render";

export class Game {
    ctx: CanvasRenderingContext2D;
    renderer: Renderer;

    constructor() {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (!canvas || !canvas.getContext("2d")) {
            console.error("Missing canvas");
            return;
        }

        this.ctx = canvas.getContext("2d")!;
        this.renderer = new Renderer(this.ctx);
    }
}

new Game();