import sharp from 'sharp';
import fs from 'fs';

interface imageDetails {
  filename: string;
  width: number;
  height: number;
}

async function processImage(
  imgName: string,
  rawImg: imageDetails,
  out: string
): Promise<string | void> {
  if(!fs.existsSync(imgName)) {
    return 'File Not Exist'
  }
  else if (rawImg.width == NaN || rawImg.height == NaN) {
    console.log("invalid width")
    return 'Invalid width or height'
  }
  try {
    if (rawImg.width > 0 && rawImg.height > 0) {
      console.log("Testing")
      await sharp(imgName).resize(rawImg.width, rawImg.height).toFile(out);
    } else if (rawImg.width < 0 || rawImg.height < 0) {
      return 'Error in processing';
    } else {

      await sharp(imgName).toFile(out);
    }
  } catch (err) {
    console.log(err);
    return 'Error in processing';
  }
}

export default processImage;
