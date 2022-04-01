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
const sharp_1 = __importDefault(require("sharp"));
function processImage(imgName, rawImg, out) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (rawImg.width > 0 && rawImg.height > 0) {
                yield (0, sharp_1.default)(imgName).resize(rawImg.width, rawImg.height).toFile(out);
            }
            else if (rawImg.width < 0 || rawImg.height < 0) {
                return 'Error in processing';
            }
            else {
                console.log('Testing');
                yield (0, sharp_1.default)(imgName).toFile(out);
            }
        }
        catch (err) {
            console.log(err);
            return 'Error in processing';
        }
    });
}
exports.default = processImage;
