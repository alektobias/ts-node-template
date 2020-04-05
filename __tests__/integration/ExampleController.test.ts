import request from 'supertest';
import app from '../../src/app';

describe('Example Controller Tests', () => {
	it('get request should return the correct message', async () => {
		const response = await request(app).get('/');

		expect(response.body).toHaveProperty('message');
	});
});
