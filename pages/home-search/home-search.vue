<!-- 
@Description 搜素页
@auth LHD
@Date 2020-09-05
 -->
<template>
	<view class="home-search">
		<!-- 自定义组件-TopBar -->
		<TopBar :isSearch="true" v-model="value" @input="change" />
		<!-- 搜索历史列表 -->
		<view class="home-list">
			<!-- 搜索历史 -->
			<view v-if="isHistory" class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view class="label-content" v-if="historyLists.length">
					<view class="label-content-item" @click="openHistory(item)" v-for="item in historyLists">{{item.name}}</view>
				</view>
				<view class="no-data" v-else>没有搜索历史</view>
			</view>
			<!-- 搜索结果 -->
				<!-- 自定义组件 scroll -->
			<ListScroll v-else>
				<uni-load-more v-if="isLoading" status="loading" iconType="snow"></uni-load-more>
				<!-- 存在搜索结果 -->
				<view v-if="searchList.length > 0">
					<ListCard
						:key="item._id" 
						v-for="(item, index) in searchList" 
						:item="item"
						@_click="setHistory"
						 />
				</view>
				<!-- 不存在搜索结果 -->
				<view v-if="searchList.length === 0 && !isLoading" class="no-data">没有搜索到相关数据</view>
			</ListScroll>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				isHistory: true,
				searchList: [], // 搜索结果
				value: '', // 搜索关键字
				isLoading: true
			};
		},
		methods: {
			/*
			* @Description 搜索框子组件自定义事件
			* @param {String} value 搜索关键字
			* @return undefined
			*/
			change (value) {
				this.value = value
				if (!value.length) {
					clearTimeout(this.timer)
					this.mark = false
					this.get_search(value)
					return
				}
				if (!this.mark) { // 节流
					this.mark = true
					this.timer = setTimeout(() => {
						this.mark = false
						this.get_search(value)
					}, 1000)
				}
			},
			/*
			* @Description搜索结果的数据内容
			* @param {String} value 搜索关键字
			* @return undefined
			*/
			async get_search (value) {
				if (!value.length) {
					this.searchList = []
					this.isHistory = true
					return
				}
				this.isHistory = false
				this.isLoading = true
				const {code, data} =  await this.$api.get_search({
					url: 'get_search', 
					value
				}).catch(err => this.isLoading = false)
				if (code !== 200) return
				this.searchList = data
				this.isLoading = false
				console.log(data)
			},
			/*
			* @Description ListCard子组件自定义事件
			* @param {Object} info 文章数据
			*/
			setHistory (info) {
				this.$store.dispatch('SET_HISTORY', {name: this.value})
			},
			/*
			* @Description 点击历史记录同步搜索框
			* @param {Object} item 当前搜索记录的数据信息
			* @return undefined
			*/
			openHistory (item) {
				this.value = item.name
				this.get_search(this.value)
			}
		},
		computed: {
			...mapState(['historyLists'])
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
	}
	.no-data {
		width: 100%;
		height: 200px;
		line-height: 200px;
		text-align: center;
		color: #666;
		font-size: 14px;
	}
</style>
