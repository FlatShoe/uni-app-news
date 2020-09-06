<!-- 
@Description 展示评论自定义组件
@auth LHD
@Date 2020-09-06
 -->
<template>
	<view class="comments-box">
		<view class="comments-header">
			<view class="comments-header-avatar">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599407798514&di=be1d290bd7241cb6d7408a44efab737d&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F14ce36d3d539b6002ac5706de850352ac75cb7e4.jpg" mode="aspectFill" />
			</view>
			<view class="comments-header-info">
				<view class="title">LHD</view>
				<view>2020-09-06 11:22</view>
			</view>
		</view>
		<view class="comment-content">
			<view>uni-app是一个框架</view>
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
	.comments-box {
		margin: 15px 0;
		.comments-header {
			display: flex;
			.comments-header-avatar {
				flex-shrink: 0;
				width: 30px;
				height: 30px;
				border-radius: 5px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.comments-header-info {
				display: flex;
				flex-direction: column;
				padding-left: 15px;
				font-size: 12px;
				color: #999;
				line-height: 1;
				.title {
					margin-bottom: 10px;
					font-size: 14px;
					color: #333;
				}
			}
		}
		.comment-content {
			margin-top: 10px;
			font-size: 14px;
			color: #000;
		}
	}
</style>
