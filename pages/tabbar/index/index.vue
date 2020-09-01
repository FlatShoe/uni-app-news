<template>
	<view class="content">
		<!-- 自定义组件-TopBar -->
		<TopBar />
		<view v-for="item in 100">{{item}}</view>
	</view>
</template>

<script>
	// uni-app中使用组件 组件目录与组件名称一致可以直接使用不需要通过import进行引入，
		 // easeCom - 帮助自动帮助我们局部引入
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
