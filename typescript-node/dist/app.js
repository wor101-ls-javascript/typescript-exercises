"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (a, b) => a + b;
app.get('/', (req, res, next) => {
    res.send('Hello');
    console.log(add(5, 5));
});
app.listen(5000, () => console.log('Server is running'));
