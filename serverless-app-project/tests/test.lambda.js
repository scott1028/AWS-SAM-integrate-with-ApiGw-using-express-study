const expect = require('expect.js');
const lambdaFunction = require('../entry-lambda.js');
const mockApiGatewayEvent = require('./mock-api-gw-event.json');

describe('lambda module', function(){
  it('should be work', function () {
    mockApiGatewayEvent.path = '/api/test';
    const mockContextObject = {
      succeed: resp => {
        try {
          expect(resp.body).to.equal('{"status":"running"}');
          process.exit(0);
        }
        catch (e) {
          process.exit(1);
        }
      },
    };
    const errorCallback = () => {
      process.exit(1);
    };

    lambdaFunction.handler(mockApiGatewayEvent, mockContextObject, errorCallback);
 });
});
