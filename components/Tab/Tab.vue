<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-container">
				<view class="tab-scroll-item" :key="item.id" v-for="item in list">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icon"><text class="icon iconfont">&#xe603;</text></view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	@import '../../common/style/icon.css';

	.tab {
		display: flex;
		width: 100%;
		border-bottom: 1px solid #f5f5f5;
		background-color: #fff;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			.tab-scroll-container {
				display: flex;
				height: 45px;
				align-items: center;
				box-sizing: border-box;

				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 10px;
					font-size: 14px;
					color: #333;
				}
			}
		}

		.tab-icon {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			.icon {
				color: #666;
				font-size: 26px;
			}
			&::after {
				content: "";
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
