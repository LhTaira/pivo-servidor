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
						optional: false
					},
					{
						name: 'pump',
						type: 'bool',
						optional: false
					},
					{
						name: 'arm',
						type: 'bool',
						optional: false
					},
					{
						name: 'wheels',
						type: 'bool',
						optional: false
					},
					{
						name: 'reel',
						type: 'bool',
						optional: false
					},
				],
			},
			path: {
				type: 'post',
				params: [
					{
						name: 'up',
						type: 'bool',
						optional: true
					},

					{
						name: 'down',
						type: 'bool',
						optional: true
					},
					{
						name: 'left',
						type: 'bool',
						optional: true
					},
					{
						name: 'right',
						type: 'bool',
						optional: true
					},
					{
						name: 'upLeft',
						type: 'bool',
						optional: true
					},
					{
						name: 'upRight',
						type: 'bool',
						optional: true
					},
					{
						name: 'downLeft',
						type: 'bool',
						optional: true
					},
					{
						name: 'downRight',
						type: 'bool',
						optional: true
					},
				],
			},

		}]
	})
});

module.exports = routes;