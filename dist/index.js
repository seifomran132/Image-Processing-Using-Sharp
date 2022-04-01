"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./api/images"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/images', images_1.default);
app.use('/output', express_1.default.static('output'));
app.get('/', (req, res) => {
    res.send('Welcome, Access /image{parametars} to apply processing');
});
app.get('/images', (req, res) => {
    res.send('Please enter valid data');
});
app.listen(port, () => {
    console.log('Server is working');
});
exports.default = app;
