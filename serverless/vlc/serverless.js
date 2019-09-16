module.exports = functionsBuilder =>
	functionsBuilder.addWebFunction('POST', '/hello', async (ctx, req) => {
		return { hello: 'world' };
	});
