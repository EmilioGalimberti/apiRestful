const request = require('supertest')

describe('GET /alumnos', ()=>{
    it('Deberia devolver cod 200 con un listado de productos no vacio', async()=>{
        const res = await request('localhost:3000')
        .get('/alumnos')
        .set('Accept','application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nombre: expect.any(String)
                })
            ])
        )
    })
})