<template>
	<view class="home-lebel">
		<!-- 我的标签 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-tatle">我的标签</view>
				<view class="label-edit">编辑</view>
			</view>
			<view class="lebel-content">
				<view class="lebel-content-item" 
							:key="index" 
							v-for="(item, index) in 10"
							>
					{{item}}标签
					<text class="icon iconfont">&#xe7c8;</text>
				</view>
			</view>
		</view>
		<!-- 推荐标签 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-tatle">标签推荐</view>
			</view>
			<view class="lebel-content">
				<view class="lebel-content-item" 
							:key="index" 
							v-for="(item, index) in 10"
							>{{item}}标签</view>
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
	page {
		background-color: #f5f5f5;
	}
	.home-lebel {
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;
			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border: 1px solid #f5f5f5;
				.label-edit {
					color: #30b33a;
					font-weight: 700;
				}
			}
			.lebel-content {
				display: flex;
				flex-wrap: wrap;
				padding: 0 15px 15px 15px;
				.lebel-content-item {
					position: relative;
					padding: 2px 5px;
					margin: 12px 10px 0 0;
					border-radius: 5px;
					border: 1px solid #666;
					font-size: 14px;
					color: #666;
					.icon {
						position: absolute;
						top: -15px;
						right: -15px;
						font-size: 28px;
						color: #d81e06;
						border-radius: 50%;
					}
				}
			}
		}
	}
	
</style>
