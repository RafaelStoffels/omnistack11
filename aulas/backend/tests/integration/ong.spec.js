const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@contato.com",
            whatsapp: "54000000000",
            city: "Caxias do Sul",
            uf: "RS"
        })
        
        expect(response.body).toHaveProperty('id'); /* error here */
        expect(response.body.id).toHaveProperty(8);
    });
});