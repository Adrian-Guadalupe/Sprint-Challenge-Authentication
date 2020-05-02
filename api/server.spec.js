const request = require('supertest')
const server = require('../index.js')

describe('when users register', () => {
   it('status code should be 201', async () => {
       const res = await request(server).post('/api/auth/register')
       .send({
           "username": "ARRR",
           "password": "Biology"
       })
       expect(res.statusCode).toEqual(201);
   });

   it('response should be JSON', async () => {
       const res = await request(server).post('/api/auth/register')
       .send({
           "username": "ARRR",
           "password": "Biology"
       })
       expect(res.type).toMatch(/json/i);
   });
});

describe('when users login', () => {
   it('status code should be 200', async () => {
       const res = await request(server).post('/api/auth/login')
       .send({
           "username": "ARRR",
           "password": "Biology"
       })
       expect(res.statusCode).toEqual(200);
   });

   it('response should be JSON', async () => {
       const res = await request(server).post('/api/auth/login')
       .send({
           "username": "ARRR",
           "password": "Biology"
       })
       expect(res.type).toMatch(/json/i);
   });
});

describe('when users get a list of users without a token', () => {
   it('status code should be 401', async () => {
       const res = await request(server).get('/api/users')
       expect(res.statusCode).toEqual(401);
   });

   it('response should be JSON', async () => {
       const res = await request(server).get('/api/users')
       expect(res.type).toMatch(/json/i);
   });
});

describe('when users get a list of jokes without a token', () => {
   it('status code should be 401', async () => {
       const res = await request(server).get('/api/jokes')
       expect(res.statusCode).toEqual(401);
   });

   it('response should be JSON', async () => {
       const res = await request(server).get('/api/jokes')
       expect(res.type).toMatch(/json/i);
   });
});