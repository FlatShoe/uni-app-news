<!-- 
@Description 选项卡对应视图轮播中的每一块
@auth LHD
@Date 2020-09-03
 -->
<template>
	<!-- 自定义组件-选项卡相应滚动列表 -->
	<ListScroll class="list-scroll">
		<!-- 自定义组件 选项卡相应列表的视图 -->
		<ListCard 
			:key="item._id" 
			v-for="(item, index) in list" 
			:mode="item.mode"
			:item="item" />
	</ListScroll>
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
				
			}
		}
	}
</script>

<style lang="less">
	.list-scroll {
		height: 100%;
	}
</style>
