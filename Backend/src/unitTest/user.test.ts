import request from "supertest";

const baseUrl = 'http://localhost:3000/';


describe('Users endpoint', () => {

	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
		.get('users')

		expect(response.statusCode).toBe(200);
	});
	
    
    it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
		.get('user/FqYMll48xuz7RQldpeEi')

		expect(response.statusCode).toBe(200);
	});

})