<template>
	<div class="demo-wrapper">
		<button @click="getUEContent()">获取内容</button>
    	<div class="editor-container">
        	<UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
    	</div>
	</div>
</template>

<script>
	import UE from './ue.vue';
	export default {
		components: {
			UE
		},
		data () {
			return {
				defaultMsg: 'ue测试',
				config: {
					initialFrameWidth: null,
          			initialFrameHeight: 350
				}
			};
		},
		methods: {
			getUEContent() {
		        let content = this.$refs.ue.getUEContent();
		        console.log(content)
		    }
		}
	};
</script>

<style lang="scss" scoped></style>