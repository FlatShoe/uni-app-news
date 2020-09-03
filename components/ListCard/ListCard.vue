<!-- 
@Description 选项卡视图自定义组件
@auth LHD
@Date 2020-09-03
 -->
<template>
	<view>
		<!-- 基础卡片 -->
		<view v-if="mode === 'base'" class="list-card">
			<view class="list-card-img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599111928680&di=eedcfa6262d0a8c68bd321841b479d44&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F14ce36d3d539b6002ac5706de850352ac75cb7e4.jpg" mode="aspectFill" />
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>uni-app</text>
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<div class="list-card-content-des-label-item">前端</div>
					</view>
					<text class="list-card-content-des-browse">120浏览</text>
				</view>
			</view>
		</view>

		<!-- 多图卡片 -->
		<view v-if="mode === 'cloumn'" class="list-card mode-cloumn">
			<view class="list-card-content">
				<view class="list-card-img">
					<view class="list-card-img-item" :key="index" v-for="(item, index) in 3">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599111928680&di=eedcfa6262d0a8c68bd321841b479d44&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F14ce36d3d539b6002ac5706de850352ac75cb7e4.jpg"
						 mode="aspectFill" />
					</view>
				</view>
				<view class="list-card-content-title">
					<text>uni-app</text>
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<div class="list-card-content-des-label-item">前端</div>
					</view>
					<text class="list-card-content-des-browse">120浏览</text>
				</view>
			</view>
		</view>


		<!-- 大图卡片 -->
		<view v-if="mode === 'image'" class="list-card mode-image">
			<view class="list-card-img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599111928680&di=eedcfa6262d0a8c68bd321841b479d44&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F14ce36d3d539b6002ac5706de850352ac75cb7e4.jpg"
				 mode="aspectFill" />
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>uni-app</text>
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<div class="list-card-content-des-label-item">前端</div>
					</view>
					<text class="list-card-content-des-browse">120浏览</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				default: 'base'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.list-card {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px rgba(1, 96, 87, .1);
		box-sizing: border-box;
		.list-card-img {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}

		.list-card-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			padding-left: 10px;

			.list-card-content-title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.list-card-content-des {
				display: flex;
				justify-content: space-between;
				font-size: 14px;

				.list-card-content-des-label {
					.list-card-content-des-label-item {
						padding: 0 5px;
						margin: 5px;
						border-radius: 15px;
						color: rgb(1, 96, 87);
						border: 1px solid rgb(1, 96, 87);
					}
				}

				.list-card-content-des-browse {
					color: #999;
					line-height: 1.5;
				}
			}
		}

		&.mode-cloumn {
			.list-card-content {
				width: 100%;
				padding-left: 0;
			}
			.list-card-img {
				display: flex;
				justify-content: space-between;
				margin-top: 10px;
				width: 100%;
				.list-card-img-item {
					border-radius: 5px;
					overflow: hidden;
					margin-right: 10px;
					&:last-child {
						margin-right: 0;
					}
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.list-card-content-des {
				margin-top: 10px;
			}
		}
		&.mode-image {
			flex-direction: column;
			.list-card-img {
				width: 100%;
				height: 100px;
				img {
					width: 100%;
					height: auto;
				}
			}
			.list-card-content {
				padding-left: 0;
				margin-top: 10px;
				.list-card-content-des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
