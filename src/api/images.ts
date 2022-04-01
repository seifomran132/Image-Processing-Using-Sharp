import express from 'express';
import processing from './processing';
import Item from './Item';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
  const params = req.query;
  // const filename: string = (params.filename as string);

  interface imageDetails {
    filename: string;
    width: number;
    height: number;
  }

  const ourImage: imageDetails = {
    filename: params.filename as string,
    width: parseInt(params.width as string),
    height: parseInt(params.height as string),
  };

  if (Object.keys(params).length != 0) {
    const filepath: string = 'images/' + ourImage.filename;
    const outName: string | null = await Item.imageNaming(ourImage);
    const outpath: string = 'output/' + outName;
    

    
    const isProcessed: boolean = Item.isImageProcessed(outName, 'output');
    if (isProcessed == true) {
      console.log('This image processed before');
    } else {
      console.log('Started Processing');
      const processedImage: string | void = await processing(filepath, ourImage, outpath);
      if(processedImage == 'File Not Exist') {
        res.send("Sorry Image does not exist, please enter valid image name")
      }
    }

    const imageThumbName: string = await Item.getPath('../../output', outName);

    res.sendFile(imageThumbName);
  } else {
    res.send('Please Enter image');
  }
});

export default images;
