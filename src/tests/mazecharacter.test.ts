require('dotenv').config();
import MazeCharacterService from '@/services/mazecharacter.service';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '../app';
import MazeCharacterRoute from '../routes/v1/mazecharacter.route';

let app = null;
afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

beforeAll(async () => {
  //   await mongoose.connect(process.env.DB_URL);
  const authRoute = new MazeCharacterRoute();
  app = new App([authRoute]);
});

describe('Testing Maze Characters', () => {
  describe('[GET] /v1/mazecharacter/:nft/details', () => {
    it('no data should be returned if not exist', async () => {
      const res = await request(app.getServer()).get(`/v1/mazecharacter/1/details`);
      expect(res.statusCode).toBe(404);
    });

    it('user should be able to view character details', async () => {
      const res = await request(app.getServer()).get(`/v1/mazecharacter/23/details`);
      expect(res.statusCode).toBe(201);
    });
  });
  describe('[POST] /v1/mazecharacter/enter', () => {
    it('only alice and card can enter the maze', async () => {
      const res = await request(app.getServer())
        .post('/v1/mazecharacter/enter')
        .send({ data: { nftId: 10, mazeId: 20 } });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('Only Alice and Card can enter the maze');
    });

    it('user should be able to enter the maze', async () => {
      const res = await request(app.getServer())
        .post('/v1/mazecharacter/enter')
        .send({ data: { nftId: 65538, mazeId: 10 } });
      console.log(res.body);
      expect(res.statusCode).toBe(201);
      expect(res.body.message).toBe('Position Updated');
    });
  });
});
