/* eslint-disable */
const UserInfo = resolve => require(['components/user/user-info'], resolve);
const Demo = resolve => require(['components/user/demo'], resolve);

export default [{
	name: 'user',
	path: '/',
	component: UserInfo
}, {
	name: 'demo',
	path: '/demo',
	component: Demo
}];
