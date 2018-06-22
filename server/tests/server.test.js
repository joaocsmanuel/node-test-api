const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Idea } = require('./../models/idea');

beforeEach((done) => {
  Idea.remove({}).then(() => done());
});

describe('POST /ideas', () => {
  it('should create a new idea', (done) => {
    let title = 'New title';
    let description = 'New description';

    request(app)
      .post('/ideas') //envia a response
      .send({
        title,
        description
      })
      .expect(200)
      .expect((res) => { //testa se a response foi enviada
        expect(res.body.title).toBe(title);
        expect(res.body.description).toBe(description);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        //testa se os dados da response foram enviados para db
        Idea.find().then((ideas) => {
          expect(ideas.length).toBe(1);
          expect(ideas[0].title).toBe(title);
          expect(ideas[0].description).toBe(description);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create idea with invalide body data', (done) => {
    request(app)
      .post('/ideas')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        
        Idea.find().then((ideas) => {
          expect(ideas.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
})
