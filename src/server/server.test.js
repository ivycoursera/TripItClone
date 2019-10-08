const request = require("supertest");

describe("loading express", function() {
  let server;
  beforeEach(function() {
    server = require("./index");
  });
  afterEach(function(done) {
    server.close(done);
  });

  it("responds to /", function testSlash(done) {
    request(server)
      .get("/")
      .expect(200);
    done();
  });
});
