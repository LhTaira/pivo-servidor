const express = require('express');
const routes = express.Router();

routes.get('/', async (req, res, next) => {
	res.json({
		Server: "Pipe",
		Endpoints: [{
			saveUserPreferences: {
				type: 'post',
				params: [
					{
						name: 'lamina',
						type: 'int',
						optional: false
					},
					{
						name: 'control',
						type: 'string',
						optional: false
					},
					{
						name: 'irrigation',
						type: 'int',
						optional: false
					},
				],
			},

            getUserPreferences: {
				type: 'get',
				params: [],
			},
            getStatus: {
				type: 'get',
				params: [],
			},
			status: {
				type: 'post',
				params: [
					{
						name: 'pipe',
						type: 'bool',
						optional: true
					},
					{
						name: 'pump',
						type: 'bool',
						optional: true
					},
					{
						name: 'arm',
						type: 'bool',
						optional: true
					},
				],
			},
			path: {
				type: 'post',
				params: [
					{
						name: 'R0',
						type: 'bool',
						optional: true
					},

					{
						name: 'L0',
						type: 'bool',
						optional: true
					},
					{
						name: 'L2',
						type: 'bool',
						optional: true
					},
					{
						name: 'R3',
						type: 'bool',
						optional: true
					},
					{
						name: 'L1',
						type: 'bool',
						optional: true
					},
					{
						name: 'R1',
						type: 'bool',
						optional: true
					},
					{
						name: 'L3',
						type: 'bool',
						optional: true
					},
					{
						name: 'R3',
						type: 'bool',
						optional: true
					},
				],
			},

		}]
	})
});

module.exports = routes;