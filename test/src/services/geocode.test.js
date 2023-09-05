import {
    describe,
    it
} from 'node:test'
import assert from 'node:assert'
import { geocodeAddress } from "../../../src/services/index.js"

import { MOCK_geocode as MOCK} from "../../mocks/index.js"

const mockResponse = {
    status: 200,
    data: MOCK
}


describe('geocodeAddress function', () => {
    it('should return geocoded data when the request is successful', async () => {

        const address = 'av.%20brasil',
            [result] = await geocodeAddress(address);

        assert.equal(JSON.stringify(result), JSON.stringify(mockResponse.data));

    });

    it('should throw an error when the request fails', async () => {

        const address = 'rua santo andre',
            [result] = await geocodeAddress(address);

        assert.notEqual(result, mockResponse.data);
    });
});