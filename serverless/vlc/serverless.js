module.exports = functionsBuilder =>
	functionsBuilder.addWebFunction('GET', '/hello', async (ctx, req) => {
		return { hello: 'world' };
	});
