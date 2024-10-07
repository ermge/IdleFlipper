class Player {
    username: string;
    totalexp: number;
}

export class Renderer {
    ctx: CanvasRenderingContext2D;
    fps: number;
    ticker: number;
    counter: number;
    oldTimeStamp: number = 0;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.fps = 60;
        this.counter = 0;
    }

    private initTicker() {
        window.requestAnimationFrame( () => {
            this.tick();
            this.initTicker();
        });
    }

    private tick() {
        const timeStamp = performance.now();
        const secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;

        const fps = Math.round(1/secondsPassed);
        
        if (this.counter >= this.fps*2) {
            this.counter = 0;
        }

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.counter++;
    }
}
