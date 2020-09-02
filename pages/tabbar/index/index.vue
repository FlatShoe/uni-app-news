<template>
	<view class="content">
		<!-- 自定义组件-TopBar -->
		<TopBar />
		<!-- 自定义组件-选项卡 -->
		<Tab :list="labelList" />
	</view>
</template>

<script>
	// uni-app中使用组件 组件目录与组件名称一致可以直接使用不需要通过import进行引入，
		 // easeCom - 帮助自动帮助我们局部引入
	export default {
		data() {
			return {
				title: 'Hello',
				labelList: []
			}
		},
		methods: {
			/*
			* @Description 获取选项卡数据
			* @return undefined
			*/
			async getLabel () {
				const {code, data} = await this.$api.get_label('get_label')
				if (code !== 200) return
				this.labelList = data
			}
		},
		onLoad() {
			this.getLabel()
		},
	}
</script>

<style>
	
</style>
