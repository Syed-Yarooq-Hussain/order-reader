import request from "supertest";
import { getOrdersList } from "../service/orderService";

const baseUrl = 'http://localhost:3000/';


describe('Orders endpoint', () => {


	it('should return array of lngth 10', async () => {
		let response = await getOrdersList(1);
		
		expect(response.length).toEqual(10);
	});

	
})