<!--
 @Description 首页
 @auth LHD
 @Date 2020-09-01
	-->
<template>
	<view class="home">
		<!-- 自定义组件-TopBar -->
		<TopBar />
		<!-- 自定义组件-选项卡 -->
		<Tab :list="labelList" :tabIndex="tabIndex" @changeTap="changeTap" />
		<!-- 自定义组件 选项卡列表轮播组件 -->
		<view class="home-list">
			<!-- 自定义组件 选项卡列表内容 -->
			<List :tab="labelList" :cardIndex="cardIndex" @changeCard="changeCard" />
		</view>
	</view>
</template>

<script>
	// uni-app中使用组件 组件目录与组件名称一致可以直接使用不需要通过import进行引入，
		 // easeCom - 帮助自动帮助我们局部引入
	export default {
		data() {
			return {
				labelList: [], // 选项卡与视图卡对应数据
				tabIndex: 0, // 选项卡当前索引
				cardIndex: 0, // 视图卡当前索引
			}
		},
		methods: {
			/*
			* @Description 获取选项卡数据
			* @return undefined
			*/
			async getLabel () {
				const {code, data} = await this.$api.get_label({url: 'get_label'})
				if (code !== 200) return
				data.unshift({name: '全部'})
				this.labelList = data
			},
			/*
			* @Description 接收Tab自定义事件 切换选项
			* @param {Obejct} info 子组件传递的参数
			* @return undefined
			*/
			changeTap (info) {
				const {index} = info
				this.cardIndex = index
			},
			/*
			/*
			* @Description 接受List自定义事件 轮播视图卡
			* @param {number} index 子组件传递的参数
			* @return undefined
			*/
			changeCard (index) {
				this.tabIndex = index
			}
		},
		onLoad() {
			this.getLabel()
		},
	}
</script>

<style lang="less">
	page {
		height: 100%;
		display: flex;
		.home {
			display: flex;
			flex-direction: column;
			flex: 1;
			.home-list {
				height: 100%;
			}
		}
	}
</style>
