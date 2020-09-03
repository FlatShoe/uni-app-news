<!-- 
@Description 选项卡对应视图轮播中的每一块
@auth LHD
@Date 2020-09-03
 -->
<template>
	<!-- 自定义组件-选项卡相应滚动列表 -->
	<ListScroll class="list-scroll">
		<!-- 自定义组件 选项卡相应列表的视图 -->
		<ListCard mode="base" />
		<ListCard mode="cloumn" />
		<ListCard mode="image" />
	</ListScroll>
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
	.list-scroll {
		height: 100%;
	}
</style>
