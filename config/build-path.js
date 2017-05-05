const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const ASSETS_PATH = path.resolve(APP_PATH, 'assets');
const COMPONENT_PATH = path.resolve(APP_PATH, 'components');
const STYLE_PATH = path.resolve(APP_PATH, 'style');
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');
const LIB_PATH = path.resolve(APP_PATH, 'lib');

module.exports = {
	ROOT_PATH,
	APP_PATH,
	ASSETS_PATH,
	COMPONENT_PATH,
	STYLE_PATH,
	MODULE_PATH,
	OUTPUT_PATH,
	LIB_PATH
};