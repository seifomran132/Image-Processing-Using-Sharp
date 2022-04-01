import path from 'path';
import fs from 'fs';

/*
    This file contain some functions related to dealing with image naming and paths

*/

interface imageDetails {
  filename: string;
  width: number;
  height: number;
}

// To generate new processed image name
async function imageNaming(img: imageDetails): Promise<string> {
  const imgTitle: string[] = img.filename.split('.');
  let finalName: string;
  console.log(img.width, img.height)
  
  if (img.width > 0 && img.height > 0) {
    finalName =
      imgTitle[0] + '_' + img.width + 'x' + img.height + '.' + imgTitle[1];
  } else {
    
    finalName = '';
  }
  return await finalName;
}

// To check if the image processed before or not
function isImageProcessed(img_name: string, outdir: string): boolean {
  const fullPath = path.resolve(outdir, img_name);
  if(img_name == ''){return false}
  if (fs.existsSync(fullPath)) {
    console.log(img_name)
    return true;
  } else {
    return false;
  }
}

// Get the path of th processed image
async function getPath(outdir: string, outname: string): Promise<string> {
  try {
    const thumbs = path.resolve(__dirname, outdir);
    const imageThumb = path.resolve(thumbs, outname);

    return imageThumb;
  } catch (err) {
    return 'Error';
  }
}

export default { imageNaming, isImageProcessed, getPath };
