import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import xxx from './components/xxx.vue';
import xxx1 from './components/xxx1.vue'


const history = createWebHashHistory();
const router = createRouter({
	history: history,
	routes: [
		{path: '/', component: xxx},
		{path:'/xxx',component:xxx1}
]
})

const app = createApp(App)
app.use(router)
	app.mount('#app');
