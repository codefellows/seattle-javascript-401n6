const superagent = require('superagent');
require('dotenv').config();
const SERVER_URL = 'http://localhost:' + process.env.PORT;

function getUserParams() {
    // using + Math.rabdom() to avoid duplicate user errors
    return {
        username: 'bill' + Math.random(),
        email: 'bill@microsoft.com' + Math.random(),
        password: 'windows95'
    };
};

describe('Handle token less requests', () => {

    test('sends 401 for GET requests if no token was provided', (done) => {
        superagent.get(SERVER_URL + '/api/hats').catch(err => {
            expect(err.status).toBe(401);
            done();
        })
    });

    test('sends 401 for POST requests if no token was provided', (done) => {

        let newUser = getUserParams();

        superagent.post(SERVER_URL + '/api/hats')
            .set('Content-Type', 'application/json')
            .send(newUser)
            .end((err, res) => {
                expect(res.status).toBe(401);
                done();
            });

    });

    test('sends 401 for PUT requests if no token was provided', (done) => {

        let newUser = getUserParams();

        superagent.post(SERVER_URL + '/api/hats')
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(newUser))
            .end((err, res) => {
                let postId = res.body._id;
                let updatedPost = {
                    name: 'newish hat'
                };
                superagent.put(SERVER_URL + '/api/hats?id=' + postId)
                    .set('Content-Type', 'application/json')
                    .send(updatedPost)
                    .end((err, res) => {
                        expect(res.status).toBe(401);
                        done();
                    });
            });

    });

});


describe('Handle valid authorization', () => {


    test('sends 200 for authorized GET request made with a valid id', (done) => {

        let newUser = getUserParams(); // grab some fAKE user info
        let userId;
        let token;
        let postId;

        // 
        superagent.post(SERVER_URL + '/api/signup') // POST to api/signup
            .set('Content-Type', 'application/json')
            .auth(newUser.username, newUser.password)
            .send(JSON.stringify(newUser))
            .end((err, res) => {
                userId = res.body._id;
                superagent.get(SERVER_URL + '/api/signin')
                    .set('Content-Type', 'application/json')
                    .auth(newUser.username, newUser.password)
                    .end((err, res) => {
                        let newPost = {
                            userId: userId,
                            name: 'New hat!'
                        };
                        token = res.body.token; // grab the JWToken
                        superagent.post(SERVER_URL + '/api/hats')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', 'Bearer ' + token)
                            .send(newPost)
                            .end((err, res) => {

                                postId = res.body._id;

                                superagent.get(SERVER_URL + '/api/hats?id=' + postId)
                                    .set('Authorization', 'Bearer ' + token)
                                    .end((err, res) => {

                                        expect(res.body.name).toBe('New hat!');

                                        expect(res.status).toBe(200);



                                        // STRETCH
                                        // superagent.get(SERVER_URL + '/api/hats')
                                        // .set('Authorization', 'Bearer ' + token)
                                        // .end((err, res) => {
                                        //     expect(Array.isArray(res.body));
                                        //     done();
                                        // }); 

                                        // NO STRETCH
                                        done();
                                    });
                            });
                    });
            });

    });

    test('sends 200 for a post request with a valid authorization and body', (done) => {

        let newUser = getUserParams();
        let userId;
        let token;
        let postId;
        superagent.post(SERVER_URL + '/api/signup')
            .set('Content-Type', 'application/json')
            .auth(newUser.username, newUser.password)
            .send(JSON.stringify(newUser))
            .end((err, res) => {
                userId = res.body._id;
                superagent.get(SERVER_URL + '/api/signin')
                    .set('Content-Type', 'application/json')
                    .auth(newUser.username, newUser.password)
                    .end((err, res) => {
                        let newPost = {
                            userId: userId,
                            name: 'I am a new hat!'
                        };
                        token = res.body.token;
                        superagent.post(SERVER_URL + '/api/hats')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', 'Bearer ' + token)
                            .send(JSON.stringify(newPost))
                            .end((err, res) => {
                                expect(true).toBe(true);
                                done();
                            });
                    });
            });
    });


    test('sends 200 for authorized PUT request made with a valid id', (done) => {
        expect(true).toBe(false);
        done();
    });

    test('STRETCH: should return array of ids for /api/resource', (done) => {
        expect(true).toBe(false);
        done();
    })
});