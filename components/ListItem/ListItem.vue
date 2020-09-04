<!-- 
@Description 选项卡对应视图轮播中的每一块内容自定义组件
@auth LHD
@Date 2020-09-03
 -->
<template>
	<!-- 自定义组件-选项卡相应滚动列表 -->
	<ListScroll class="list-scroll" @loadmore="loadmore">
		<!-- 自定义组件 选项卡相应列表的视图 -->
		<ListCard 
			:key="item._id" 
			v-for="(item, index) in list" 
			:mode="item.mode"
			:item="item" />
			<view v-if="list.length > 9 || list.length === 0"><uni-load-more iconType="snow" :status="load.loading" /></view>
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
			},
			load: {
				type: Object,
				default () {
					return {
						loading: 'loading'
					}
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			/*
			* @Description 子组件底部促发事件 并传递给父组件
			* @return undefined
			*/
			loadmore () {
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="less">
	.list-scroll {
		height: 100%;
	}
</style>
