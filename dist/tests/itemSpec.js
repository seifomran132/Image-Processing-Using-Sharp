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
const Item_1 = __importDefault(require("./../api/Item"));
const fs_1 = __importDefault(require("fs"));
const testImage = {
    filename: 'testImage.jpg',
    width: 200,
    height: 200,
};
describe('To test the Item functions', () => {
    it('Should give the image the a specific name based on width and height and name', () => __awaiter(void 0, void 0, void 0, function* () {
        const thumbTest = yield Item_1.default.imageNaming(testImage);
        expect(thumbTest).toEqual('testImage_200x200.jpg');
    }));
    it('Should Check that this image does not exist in the out path', () => {
        fs_1.default.access('./output/', (err) => {
            console.log('Started Access');
            if (err) {
                console.log(err);
            }
            else {
                console.log('Path Accessed');
            }
        });
        const checkTest = Item_1.default.isImageProcessed('testImage.jpg', './output/');
        expect(checkTest).toBeFalse();
    });
    it('Should Check that this image already exists in the out path', () => {
        fs_1.default.access('./output/', (err) => {
            console.log('Started Access');
            if (err) {
                console.log(err);
            }
            else {
                console.log('Path Accessed');
            }
        });
        // Note: image (image1_200x200.jpg) must be already exists in output folder
        const checkTest = Item_1.default.isImageProcessed('image1_200x200.jpg', './output/');
        expect(checkTest).toBeTrue();
    });
});
