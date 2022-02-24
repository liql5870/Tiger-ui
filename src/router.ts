import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/switch/SwitchDemo.vue';
import ButtonDemo from './components/button/ButtonDemo.vue';
import DialogDemo from './components/dialog/DialogDemo.vue';
import TabsDemo from './components/tab/TabsDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';

import install from './markdown/install.md';
const history = createWebHashHistory();

// const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
	history: history,
	routes: [
		{path: '', component: Home},
		{
			path: '/doc', component: Doc, children: [
				{path: '/', component: '/doc/intro'},
				{path: 'intro', component: md('intro')},
				{path: 'get-started', component: md('get-started')},
				{path: 'install', component: md('install')},
				{path: 'switch', component: SwitchDemo},
				{path: 'button', component: ButtonDemo},
				{path: 'dialog', component: DialogDemo},
				{path: 'tabs', component: TabsDemo}
			]
		}
	]
});
router.afterEach(() => {
	console.log('路由切换了');
});
