<template>
	<view class="home-search">
		<!-- 自定义组件-TopBar -->
		<TopBar :isSearch="true" @input="change" />
		<!-- 搜索历史列表 -->
		<view class="home-list">
			<view class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view class="label-content" v-if="historyList.length">
					<view class="label-content-item" v-for="item in historyList">{{item}}</view>
				</view>
				<view class="no-data" v-else>没有搜索历史</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList: [] // 搜索历史记录列表
			};
		},
		methods: {
			/*
			* @Description 搜索框子组件自定义事件
			*/
			change (e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="less">
	page {
		display: flex;
		height: 100%;
		background-color: #f5f5f5;
	}
	.home-search {
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px solid red;
	}
	.label-box {
		background-color: #fff;
		margin-bottom: 10px;
		.label-header {
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #666;
			padding: 10px 15px;
			border-bottom: 1px solid #f5f5f5;
			.label-title {
				color: #016057;
			}
			.label-clear {
				color: #30a33b;
				font-weight: 700;
			}
		}
		.label-content {
			display: flex;
			flex-wrap: wrap;
			padding: 0 15px 15px 15px;
			.label-content-item {
				padding: 2px 10px;
				margin-top: 12px;
				margin-right: 10px;
				border-radius: 5px;
				border: 1px solid #666;
				font-size: 14px;
				color: #666;
			}
		}
		.no-data {
			width: 100%;
			height: 200px;
			line-height: 200px;
			text-align: center;
			color: #666;
			font-size: 14px;
		}
	}
</style>
