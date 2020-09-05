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
			<view class="topbar-content" 
						:class="{'current-search': isSearch}"
						:style="{'height': topBarHeight + 'px', 'width': topBarWidth + 'px'}" 
						@click="open">
				<view class="topbar-icon" v-if="isSearch">
					<text class="icon iconfont">&#xe66d;</text>
				</view>
				<!-- 非搜索页显示的内容 -->
				<view class="topbar-search" v-if="!isSearch">
					<view class="topbar-serch-icon iconfont">
						<text>&#xe62e;</text>
					</view>
					<view class="topbar-serch-text">uni-app、vue</view>
				</view>
				<!-- 搜索页显示的内容 -->
				<view class="topbar-search" v-else>
					<view class="topbar-serch-icon iconfont">
						<text>&#xe62e;</text>
					</view>
					<input class="topbar-serch-text" 
								type="text" 
								placeholder="请输入您要搜索的内容"
								v-model="serchValue" 
								@input="inputChange" />
				</view>
			</view>
		</view>
		<!-- 顶部定位占位 -->
		<view :style="{'height': fixedPlaceholderHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {  // 是否首页调用
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				statusBarHeight: 20, // 设备状态栏高度
				topBarHeight: 45, // 顶部导航栏内容高度
				topBarWidth: 375 ,// 顶部导航栏内容宽度
				serchValue: '', // 搜索内容
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
			},
			/*
			* @Description 跳转到搜索页面
			* @return undefined
			*/
			open () {
				if (this.isSearch) return
				uni.navigateTo({
					url: '/pages/home-search/home-search'
				})
			},
			/*
			* @Description 搜索框键入事件
			* @return undefined
			*/
			inputChange (e) {
				const {value} = e.target
				this.$emit('input', value)
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
				.topbar-search {
					display: flex;
					align-items: center;
					width: 100%;
					height: 30px;
					background-color: #fff;
					border-radius: 30px;
					padding: 0 15px;
					font-size: 12px;
					.topbar-serch-icon {
						margin-right: 10px;
					}

					.topbar-serch-text {
						color: #999;
					}
				}
				&.current-search {
					.topbar-icon {
						position: relative;
						left: -7px;
						.icon {
							font-size: 18px;
							color: #999;
						}
					}
					.topbar-search {
						border-radius: 5px;
						.topbar-serch-text {
							font-size: 14px;
						}
					}
				}
			}
		}
	}
</style>
