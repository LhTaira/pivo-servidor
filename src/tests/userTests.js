const chai = require('chai');
const should = chai.should();
const userRepository = require('../repository/UserRepository');


describe('UserRepository', () => {
    it('should save the user preferences', (done) => {
        userRepository.saveUserPreferences(24, "automatic").then((response) => {
            let res = JSON.parse(response);
            res.should.have.property('lamina').to.equal(24);
            res.should.have.property('control').to.equal("automatic");
            done();
        }).catch((reject) => {
            console.log(reject);
            done();
        })
    }).timeout(5000)

    it('should get the user preferences', (done, fail) => {
        userRepository.getUserPreferences().then((response) => {
            response.should.have.property('lamina').to.equal(24);
            response.should.have.property('control').to.equal("automatic");
            done();
        }).catch((reject) => {
            console.log(reject);
            fail();
        })
    }).timeout(5000)
})
