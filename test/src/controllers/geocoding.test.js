import {
    describe,
    it
} from 'node:test'
import assert from 'node:assert'
import request from 'supertest';
import express from 'express';
import { geocodingController } from '../../../src/controllers/index.js';
 
const app = express();
app.use(express.json());
app.get('/api/geocode/:address', geocodingController);
 
describe('geocodingController', () => {
    it('should return geocode and weather data for a valid address', async () => {
        const response = await request(app).get('/api/geocode/av.%20brasil');

        assert.equal(response.status, 200) 
    });

    it('should return an error for an invalid address', async () => {
        const response = await request(app).get('/api/geocode/asdasdasdas');

        assert.equal(response.status, 400) 
    });
});
