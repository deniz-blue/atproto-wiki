import DefaultTheme from 'vitepress/theme';
import Mermaid from "../components/Mermaid.vue";
import { EnhanceAppContext } from "vitepress";

export default {
	...DefaultTheme,
	enhanceApp({ app }: EnhanceAppContext) {
		app.component('Mermaid', Mermaid);
	},
};
