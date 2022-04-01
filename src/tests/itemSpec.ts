import Item from './../api/Item';
import fs from 'fs';

interface imageDetails {
  filename: string;
  width: number;
  height: number;
}

const testImage: imageDetails = {
  filename: 'testImage.jpg',
  width: 200,
  height: 200,
};

describe('To test the Item functions', () => {
  it('Should give the image the a specific name based on width and height and name', async () => {
    const thumbTest: string = await Item.imageNaming(testImage);
    expect(thumbTest).toEqual('testImage_200x200.jpg');
  });
  it('Should Check that this image does not exist in the out path', () => {
    fs.access('./output/', (err) => {
      console.log('Started Access');
      if (err) {
        console.log(err);
      } else {
        console.log('Path Accessed');
      }
    });
    const checkTest = Item.isImageProcessed('testImage.jpg', './output/');
    expect(checkTest).toBeFalse();
  });
  it('Should Check that this image already exists in the out path', () => {
    fs.access('./output/', (err) => {
      console.log('Started Access');
      if (err) {
        console.log(err);
      } else {
        console.log('Path Accessed');
      }
    });

    // Note: image (image1_200x200.jpg) must be already exists in output folder

    const checkTest = Item.isImageProcessed('image1_200x200.jpg', './output/');
    expect(checkTest).toBeTrue();
  });
});
