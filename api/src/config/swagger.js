const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; // Main application file or route files

const doc = {
	info: {
		title: 'My Node.js API with PostgreSQL',
		description: 'API documentation for my Node.js application.',
	},
	host: 'localhost:3000',
	schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
	require('./app'); // Your main app file
});