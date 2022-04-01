## Scripts

- To build -> 'npm run build'
- To Test -> 'npm run test'
- To use prettier -> 'npm run prettier'
- To use ESlint -> 'npm run lint'
- To Start Server -> 'npm run start'

## Instructions

Server will run on port 3000
Access http://localhost:3000/ to run the applicatioin

### Usage

To resize images access http://localhost:3000/images
Parametars:-

- filename: name of the image
- width: the required width for resize
- height: the required height for resize

The final URL http://localhost:3000/images?filename=image1.jpg&width=200&height=200
Where image name is image1.jpg and width is 200 and height is 200

### Display the orginal image

To display the original image access http://localhost:3000/images?filename=image1.jpg
Where image1.jpg is the image name in images folder

### Output

The output will be available in output folder inside the main directory of the project
The resized image will be outputed with name imagename_WWxHH.jpg
Where WW is the width of the image and HH is the height of the image
