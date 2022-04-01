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
const processing_1 = __importDefault(require("./../api/processing"));
const testImage = {
    filename: 'image1.jpg',
    width: -200,
    height: 200,
};
const filepath = 'images/' + testImage.filename;
describe('To Test the functionality of sharp resizing images', () => {
    it('Should return error because width is -200', () => __awaiter(void 0, void 0, void 0, function* () {
        const testError = yield (0, processing_1.default)(filepath, testImage, 'output/image1_200x200.jpg');
        expect(testError).toEqual('Error in processing');
    }));
});
