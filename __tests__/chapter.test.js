const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');

describe('chapter', () => {
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

  describe('GET /new', () => {
    test('It should render the new form', async () => {
      const response = await request(app).get('/chapters/new');

      expect(response.text).toBeDefined();
    });

    test('It should return status 200', async () => {
      const response = await request(app).get('/chapters/new');

      expect(response.statusCode).toBe(200);
    });
  });

  describe('POST /', () => {
    describe('when the new chapter has title and content', () => {
      test('It shoud create a new chapter with the correct data', async () => {
        const newChapter = await request(app)
          .post('/chapters')
          .send({
            title: 'New Chapter',
            content: 'New chapter content',
          });

        const receivedData = newChapter.body;

        expect(receivedData.title).toBe('New Chapter');
        expect(receivedData.content).toBe('New chapter content');
      });

      test('It should return status 200', async () => {
        const newChapter = await request(app)
          .post('/chapters')
          .send({
            title: 'New Chapter',
            content: 'New chapter content',
          });

        expect(newChapter.statusCode).toBe(200);
      });
    });

    describe('when the new chapter has not title or content', () => {
      test('It shoud return status 400', async () => {
        const newChapter = await request(app)
          .post('/chapters')
          .send({
            content: 'New chapter content',
          });

        expect(newChapter.statusCode).toBe(400);
      });

      test('It shoud return status 400', async () => {
        const newChapter = await request(app)
          .post('/chapters')
          .send({
            title: 'New chapter',
          });

        expect(newChapter.statusCode).toBe(400);
      });
    });
  });

  describe('POST /:id/update', () => {
    describe('when the id exists', () => {
      describe('when has title and content', () => {
        test('it should modify the chapter', () => { });
        test('it should return status 200', () => { });
      });

      describe('when has not title or content', () => {
        test('it should not modify the chapter', () => { });
        test('it should return status 400', () => { });
      });
    });

    describe('when the id does not exist', () => {
      test('it should return 404', () => { });
    });
  });

  describe('DELETE /:id', () => {
    describe('when the id exists', () => {
      test('it should delete the chapter', () => { });
    });

    describe('when the id does not exist', () => {
      test('it should return 404', () => { });
    });
  });
});
