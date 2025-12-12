const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

// routing
const index = require('./routes/index');
const bookRoute = require('./routes/bookRoutes');
const memberRoute = require('./routes/memberRoutes');
const borrowingRoute = require('./routes/borrowingRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

// Swagger definition
const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
			info: {
			   title: 'Backend Perpustakaan',
			   version: '1.0.0',
			   description: 'Node Backend API Perpustakaan documentation using Swagger',
		},
		servers: [
			{
			   url: 'http://localhost:5017/api',
			},
		],
		components: {
			/*securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT', 
				},
			},*/
		},
	},
   apis: ['./src/routes/*.js'],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(index);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/', bookRoute);
app.use('/api/', memberRoute);
app.use('/api/', borrowingRoute);

module.exports = app;