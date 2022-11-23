import player from './index.vue';

player.install = (App) => {
	App.component(player.__name||player.__name, player);
};

export default player;
