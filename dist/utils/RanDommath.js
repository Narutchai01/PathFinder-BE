"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomMath = void 0;
const randomMath = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
};
exports.randomMath = randomMath;
