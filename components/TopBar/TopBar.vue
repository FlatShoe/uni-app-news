<!-- 
@Description TopBar 自定义组件
@auth LHD
@Date 2020-09-01 
 -->
<template>
	<view class="topbar">
		<view class="topbar-fixed">
			<!-- 状态栏占位适配 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<view class="topbar-content" :style="{'height': topBarHeight + 'px', 'width': topBarWidth + 'px'}">
				<view class="topbar-serch">
					<view class="topbar-serch-icon"></view>
					<view class="topbar-serch-text">uni-app、vue</view>
				</view>
			</view>
		</view>
		<!-- 顶部定位占位 -->
		<view :style="{'height': fixedPlaceholderHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20, // 设备状态栏高度
				topBarHeight: 45, // 顶部导航栏内容高度
				topBarWidth: 375 // 顶部导航栏内容宽度
			}
		},
		methods: {
			/*
			* @Description 不同设备适配
			* @reutrn undefined
			*/
			setAdaptive () {
				// 同步过去当前设备信息
				const {statusBarHeight, windowWidth} = uni.getSystemInfoSync()
				// 让顶部内容导航栏的宽度为屏幕的宽度
				this.topBarWidth = windowWidth
				// 状态栏宽度
				this.statusBarHeight = statusBarHeight
			// H5 APP-PLUS MP-ALIPLAY 不支持以下方法
				// #ifndef APP-PLUS || H5 || MP-ALIPAY
				// 获取小程序顶部胶囊信息
				const {top, bottom, left} = uni.getMenuButtonBoundingClientRect()				
				// 设置顶部导航栏的内容高度
				 //（小程序顶部胶囊底部 - 状态栏高度）+ （小程序顶部胶囊顶部 - 状态栏高度）
				this.topBarHeight = (bottom - statusBarHeight) + (top - statusBarHeight)
				// 设置顶部导航栏的内容宽度
				this.topBarWidth = left
				// #endif
			}
		},
		computed: {
			// 顶部导航栏绝对定位占位高度
			fixedPlaceholderHeight () {
				// 状态栏 + 顶部导航栏内容高度
				return this.statusBarHeight + this.topBarHeight
			}
		},
		created() {
			this.setAdaptive()
		}
	}
</script>

<style lang="less">
	.topbar {
		.topbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: #016057;
			.topbar-content {
				height: 45px;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				box-sizing: border-box;

				.topbar-serch {
					display: flex;
					align-items: center;
					width: 100%;
					height: 30px;
					background-color: #fff;
					border-radius: 30px;
					padding: 0 15px;

					.topbar-serch-icon {
						width: 10px;
						height: 10px;
						border: 1px solid red;
						margin-right: 10px;
					}

					.topbar-serch-text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
