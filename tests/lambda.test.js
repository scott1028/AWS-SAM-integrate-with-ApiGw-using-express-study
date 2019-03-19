const lambdaFunction = require('../src/entry.lambda.js');
const mockApiGatewayEvent = require('./mock-api-gw-event.json');
const mockContextObject = {
  succeed: () => {
    console.log('old way as a successfully callback func');
  },
};
const mockCallbackFunc = () => {};

lambdaFunction.handler(mockApiGatewayEvent, mockContextObject, mockCallbackFunc);
