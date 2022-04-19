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
						name: 'irrigation',
						type: 'int',
						optional: false
					},
				],
			},

            getUserPreferences: {
				type: 'get',
				params: [],
			}

		}]
	})
});

module.exports = routes;