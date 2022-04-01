import app from './../index';
import supertest from 'supertest';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('To Test the responses for the app', () => {
  it('Should test access (./)', async () => {
    const response: supertest.Response = await request.get('/');
    expect(response.status).toEqual(200);
  });
  it('Should test access (./images)', async () => {
    const response: supertest.Response = await request.get('/images');
    expect(response.status).toEqual(200);
  });
  it('Should test access (./images?filename=image1.jpg&width=200&height=200)', async () => {
    const response: supertest.Response = await request.get(
      '/images?filename=image1.jpg&width=200&height=200'
    );
    expect(response.status).toEqual(200);
  });
  it('Should test access invalid image data (./images?filename=image1.jpg&width=-200&height=200)', async () => {
    const response: supertest.Response = await request.get(
      '/images?filename=image1.jpg&width=200&height=200'
    );
    expect(response.status).toEqual(200);
  });
  it('Should test access invalid route', async () => {
    const response: supertest.Response = await request.get(
      '/routedoesnotexist'
    );
    expect(response.status).toEqual(404);
  });
});
