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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// To generate new processed image name
function imageNaming(img) {
    return __awaiter(this, void 0, void 0, function* () {
        const imgTitle = img.filename.split('.');
        let finalName;
        if (img.width > 0 && img.height > 0) {
            finalName =
                imgTitle[0] + '_' + img.width + 'x' + img.height + '.' + imgTitle[1];
        }
        else if (!img.width || !img.height) {
            finalName = imgTitle[0] + '_' + 'Original' + '.' + imgTitle[1];
        }
        else {
            finalName = '';
        }
        return yield finalName;
    });
}
// To check if the image processed before or not
function isImageProcessed(img_name, outdir) {
    const fullPath = path_1.default.resolve(outdir, img_name);
    if (fs_1.default.existsSync(fullPath)) {
        return true;
    }
    else {
        return false;
    }
}
// Get the path of th processed image
function getPath(outdir, outname) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const thumbs = path_1.default.resolve(__dirname, outdir);
            const imageThumb = path_1.default.resolve(thumbs, outname);
            return imageThumb;
        }
        catch (err) {
            console.log(err);
            return 'Error';
        }
    });
}
exports.default = { imageNaming, isImageProcessed, getPath };
