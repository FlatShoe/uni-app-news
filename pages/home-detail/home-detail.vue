<!-- 
 @Description 文章详情页
 @auth LHD
 @Date 2020-09-06
 -->
<template>
	<view class="home-detail">
		<!-- 文章详情 -->
		<view class="detail-title">我是一名前端开发者，我们要不要学习node.js</view>
		<view class="detail-header">
			<view class="detail-header-avatar">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599333737099&di=be3396d6c594c4b70e811b64831d54d0&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F14ce36d3d539b6002ac5706de850352ac75cb7e4.jpg" mode="aspectFill" />
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">LIhangdi</view>
				<view class="detail-header-content-info">
					<text>2020-09-006</text>
					<text>1234 浏览</text>
					<text>2345 赞</text>
				</view>
			</view>
		</view>
		<view class="detail-content">
			详情数据
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
				
			};
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
		height: 1000px;
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
