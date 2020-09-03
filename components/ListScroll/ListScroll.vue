<!-- 
@Description 选项卡列表自定义组件
@auth LHD
@Date 2020-09-03
 -->
<template>
	<view class="scroll">
		<scroll-view class="scroll-list" scroll-y>
			<view >
				<slot></slot>
			</view>
		</scroll-view>
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
	.scroll {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.scroll-list {
			display: flex;
			flex-direction: column;
			height: 100%;
		}
	}
</style>
