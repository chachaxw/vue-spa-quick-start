/* eslint-disable */
const Home = resolve => require(['components/business/index/index'], resolve);

export default [{
	name: 'business',
	path: '/business/:id',
	component: Home
}];
