import processing from './../api/processing';
interface imageDetails {
  filename: string;
  width: number;
  height: number;
}

const testImage: imageDetails = {
  filename: 'image1.jpg',
  width: -200,
  height: 200,
};

const filepath: string = 'images/' + testImage.filename;

describe('To Test the functionality of sharp resizing images', () => {
  it('Should return error because width is -200', async () => {
    const testError = await processing(
      filepath,
      testImage,
      'output/image1_200x200.jpg'
    );
    expect(testError).toEqual('Error in processing');
  });
});
