<template>
	<div v-html="svg"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { render } from './mermaid';

const props = defineProps({
	graph: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	showCode: {
		type: Boolean,
		default: true,
	},
});

const svg = ref('');
const code = ref(decodeURIComponent(props.graph));

onMounted(async () => {
	await renderChart();

	//refresh images on first render
	const hasImages = /<img([\w\W]+?)>/.exec(code.value)?.length > 0;
	if (hasImages)
		setTimeout(() => {
			let imgElements = document.getElementsByTagName('img');
			let imgs = Array.from(imgElements);
			if (imgs.length) {
				Promise.all(
					imgs
						.filter((img) => !img.complete)
						.map(
							(img) =>
								new Promise((resolve) => {
									img.onload = img.onerror = resolve;
								})
						)
				).then(() => {
					renderChart();
				});
			}
		}, 100);
});

const renderChart = async () => {
	console.log('rendering chart' + props.id + code.value);
	const hasDarkClass = document.documentElement.classList.contains('dark');
	const mermaidConfig = {
		securityLevel: 'loose',
		startOnLoad: false,
		theme: hasDarkClass ? 'dark' : 'default',
	};
	let svgCode = await render(props.id, code.value, mermaidConfig);
	// This is a hack to force v-html to re-render, otherwise the diagram disappears
	// when **switching themes** or **reloading the page**.
	// The cause is that the diagram is deleted during rendering (out of Vue's knowledge).
	// Because svgCode does NOT change, v-html does not re-render.
	// This is not required for all diagrams, but it is required for c4c, mindmap and zenuml.
	const salt = Math.random().toString(36).substring(7);
	svg.value = `${svgCode} <span style="display: none">${salt}</span>`;
};
</script>
