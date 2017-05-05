module.exports = {
	/**
	 * @api {get} /test A test api
	 * @apiName Test
	 * @apiGroup Test
	 * @apiParam {Number} id User id
	 * @apiSuccess {String} test first name of resp
	 * @apiSuccess {String} some second name of resp
	 * 
	 */
	'get /test': {
		test: 'test'
	},
	'get /demo': {
		demo: 'demo'
	}
};