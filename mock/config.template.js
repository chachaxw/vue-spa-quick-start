module.exports = {
	host: '0.0.0.0',
	port: 3000,
	directory: './',
	cors: true,
	watch: true,
	proxy: 'www.chacha.lol',
	to: '127.0.0.1:80',
	wechatConfig: {
		appId: '',
		secret: '',
		// debug: true,
		// timestamp: '',
		// nonceStr: '',
		url: '',
		jsApiList: ['chooseImage', 'previewImage']
	}
};
