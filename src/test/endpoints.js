const basicEndpointTest = require('./utils/basicEndpointTest.js')

const tests = [
	{
		requestData: {
			endpoint: 'api/beer/GUL',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/GUL/breweries',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/GUL/ingredients',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/GUL/ingredients/details',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/GUL/socialAccounts',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/GUL/variations',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/beer/GUL/breweries',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/brewery/ABC',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
	{
		requestData: {
			endpoint: 'api/brewery/ABC/beers',
			httpMethod: 'get',
			body: ''
		},
		expectedResponse: {
			expectedCode: 200,
			expectedParsingOutputType: 'object',
			expectedProperies: [
				'name', 'id', 'description'
			]
		}
	
	},
]


tests.forEach( endpoint => {
	basicEndpointTest(endpoint.requestData, endpoint.expectedResponse, describe, it)
})
