"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processing_1 = __importDefault(require("./processing"));
const Item_1 = __importDefault(require("./Item"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    const ourImage = {
        filename: params.filename,
        width: parseInt(params.width),
        height: parseInt(params.height),
    };
    if (Object.keys(params).length != 0) {
        const filepath = 'images/' + ourImage.filename;
        const outName = yield Item_1.default.imageNaming(ourImage);
        const outpath = 'output/' + outName;
        const isProcessed = Item_1.default.isImageProcessed(outName, 'output');
        if (isProcessed == true) {
            console.log('This image processed before');
        }
        else {
            console.log('Started Processing');
            yield (0, processing_1.default)(filepath, ourImage, outpath);
        }
        const imageThumbName = yield Item_1.default.getPath('../../output', outName);
        res.sendFile(imageThumbName);
    }
    else {
        res.send('Please Enter image');
    }
}));
exports.default = images;
