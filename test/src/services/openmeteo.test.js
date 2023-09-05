import {
    describe,
    it
} from 'node:test'
import assert from 'node:assert' 
import { fetchWeatherForecast } from "../../../src/services/index.js"
import {
    MOCK_openmeteo as MOCK
} from "../../mocks/index.js"

const mockResponse = {
    status: 200,
    data: MOCK,
};
 
describe('fetchWeatherForecast function', () => {
    it('should return weather forecast data when the request is successful', async () => {
        const result = await fetchWeatherForecast({ latitude: -22.875, longitude: -43.375 });
        assert.equal(JSON.stringify(result), JSON.stringify(mockResponse.data))
 
    });

    it('should throw an error when the request fails', async () => {
        const result = await fetchWeatherForecast({ latitude: -20.875, longitude: -43.375 });
        assert.notEqual(result, mockResponse.data)
    });
 
});