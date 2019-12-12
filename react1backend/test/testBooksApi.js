import supertest from 'supertest';
import {app} from '../index.js';
import should from 'should';

// UNIT test begin
describe('Books API test', function () {

var book = {id: "2", name:"Jinyu", type:"Science",mark:"3.3"};


    this.timeout(120000);

    it('should return collection of JSON documents', function (done) {
        supertest(app)
            .get('/api/books/home')
            .expect('Content-type', /json/)
            .expect(200)
            .then(res => {
                res.should.have.property('status').equal(200);
                done();
            });
    });

    it('should update a book', function (done) {
        supertest(app)
            .put('/api/books/home/'+book.id)
            .send(book)
            .expect('Content-type', /json/)
            .expect(200)
            .then ((res) => {
                done();
            });
    });


    it('should delete a book', function (done) {
        supertest(app)
            .delete('/api/books/home/'+book.id)
            .expect(204)
            .then ((res) => {
                res.status.should.equal(204);
                done();
            });
    });


});


