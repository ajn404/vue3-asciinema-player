import player from './player';

//按需引入
export { player };

const components = [player];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default {
	install,
};
