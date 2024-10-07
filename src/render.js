"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var Renderer = /** @class */ (function () {
    function Renderer(ctx) {
        this.oldTimeStamp = 0;
        this.ctx = ctx;
        this.fps = 60;
        this.counter = 0;
    }
    Renderer.prototype.initTicker = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.tick();
            _this.initTicker();
        });
    };
    Renderer.prototype.tick = function () {
        var timeStamp = performance.now();
        var secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;
        var fps = Math.round(1 / secondsPassed);
        if (this.counter >= this.fps * 2) {
            this.counter = 0;
        }
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.counter++;
    };
    return Renderer;
}());
exports.Renderer = Renderer;
