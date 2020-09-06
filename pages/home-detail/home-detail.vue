<!-- 
 @Description 文章详情页
 @auth LHD
 @Date 2020-09-06
 -->
<template>
	<view class="home-detail">
		<!-- 文章详情 -->
		<view class="detail-title">{{foramData.title}}</view>
		<view class="detail-header">
			<view class="detail-header-avatar">
				<img :src="foramData.author.avatar" />
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">{{foramData.author.author_name}}</view>
				<view class="detail-header-content-info">
					<text>{{foramData.create_time}}</text>
					<text>{{foramData.browse_count}} 浏览</text>
					<text>{{foramData.thumbs_up_count}} 赞</text>
				</view>
			</view>
		</view>
		<view class="detail-content">
			<view class="detail-content-html">
				{{foramData.content}}
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="detail-bottom">
			<view class="detail-bottom-input">
				<text class="text">谈谈你的看法</text>
				<text class="icon iconfont">&#xe612;</text>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icons-box">
					<text class="icon iconfont">&#xe6a2;</text>
				</view>
				<view class="detail-bottom-icons-box">
					<text class="icon iconfont">&#xe600;</text>
				</view>
				<view class="detail-bottom-icons-box">
					<text class="icon iconfont">&#xe62b;</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				foramData: {}, // 文章数据
			};
		},
		methods: {
			/*
			* @Description 获取页面跳转携带过来的参数
			* @param {String} info  参数数据
			* @return undefined
			*/
			getParams (info) {
				this.foramData = JSON.parse(info.params)
			},
			/*
			* @Description 获取文章详情信息
			* @return undefined
			*/
			async get_detail () {
				const {code, data} = await this.$api.get_detail({
					url: 'get_detail',
					article_id: this.foramData.article_id
				})
				if (code !== 200) return
				this.foramData = data
			}
		},
		onLoad(query) {
			this.getParams(query)
			this.get_detail()
		}
	}
</script>

<style lang="less">
	.detail {
		padding: 15px 0 54px 0;
	}
	.detail-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: 700;
		color: #333;
	}
	.detail-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;
		.detail-header-avatar {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.detail-header-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			font-size: 12px;
			padding-left: 10px;
			.detail-header-content-title {
				font-size: 14px;
				color: #333;
			}
			.detail-header-content-info {
				color: #999;
				text {
					margin-right: 10px;
				}
			}
		}
	}
	.detail-content {
		min-height: 500px;
		margin-top: 20px;
		.detail-content-html {
			padding: 0 15px;
		}
	}
	.detail-bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px solid #f5f5f5;
		background-color: #fff;
		box-sizing: border-box;
		.detail-bottom-input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 10px;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px solid #ddd;
			border-radius: 5px;
			font-size: 14px;
			color: #999;
			.icon {
				color: #f07373;
			}
		}
		.detail-bottom-icons {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			.detail-bottom-icons-box {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
				.icon {
					color: #f07373;
					font-size: 22px;
				}
			}
		}
	}
</style>
