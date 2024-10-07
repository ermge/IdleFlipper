"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var render_1 = require("./render");
var Game = /** @class */ (function () {
    function Game() {
        var canvas = document.getElementById("canvas");
        if (!canvas || !canvas.getContext("2d")) {
            console.error("Missing canvas");
            return;
        }
        this.ctx = canvas.getContext("2d");
        this.renderer = new render_1.Renderer(this.ctx);
    }
    return Game;
}());
exports.Game = Game;
new Game();
