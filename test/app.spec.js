const request = require('supertest');
const app = require('../src/app');

describe('Testing API endpoints', () => {
    //
    describe('GET / ', () => {
        it('should display message welcome to my API', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });

    describe('GET /parcels', () => {
        it('should get all parcels in json format', (done) => {
        request(app)
            .get('/api/v1/parcels')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });

    describe('GET /parcels/:id', () => {
        it('should get parcel in json format', (done) => {
        request(app)
            .get('/api/v1/parcels/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
    });
});