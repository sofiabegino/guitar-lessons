const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');

describe('app', () => {
  let server = null;

  beforeAll(() => {
    jest.useFakeTimers();
    server = app.listen(3000, () => console.log('Listening on port 3000'));
  });

  afterAll(async () => {
    await server.close();

    mongoose.connections.forEach(async (con) => {
      await con.close();
    });

    await mongoose.disconnect();
  });

  describe('GET /', () => {
    test('It should render the index page', async () => {
      const response = await request(app).get('/');

      expect(response.text).toBeDefined();
    });

    test('It should return status 200', async () => {
      const response = await request(app).get('/');

      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /teacher', () => {
    test('It should render the index teacher page', async () => {
      const response = await request(app).get('/teacher');

      expect(response.text).toBeDefined();
    });

    test('It should return status 200', async () => {
      const response = await request(app).get('/');

      expect(response.statusCode).toBe(200);
    });
  });
});
