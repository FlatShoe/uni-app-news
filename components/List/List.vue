<!-- 
@Description 选项卡对应视图轮播
@auth LHD
@Date 2020-09-03
 -->
<template>
	<swiper class="swiper" @change="changeCard" :current="cardIndex">
		<swiper-item class="swiper-item" 
								 :key="index"
								 v-for="(item, index) in tab">								 
			<ListItem />
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			cardIndex: {
				type: Number
			}
		},
		data() {
			return {

			}
		},
		methods: {
			/*
			* @Description swiper组件滑动监听索引，并通过自定义事件传值至父组件
			* @param {Object} e 事件参数对象
			* @return undefined
			*/
			changeCard (e) {
				const {detail: {current}} = e
				this.$emit('changeCard', current)
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
	.swiper {
		height: 100%;
		.swiper-item {
			height: 100%;
		}
	}
</style>
