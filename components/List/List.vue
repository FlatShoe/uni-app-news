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
			<ListItem :list="list" />
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
				list: []
			}
		},
		methods: {
			/*
			* @Description获取视图卡相应数据内容
			* @return undefined
			*/
			async getList () {
				const {code, data} =  await this.$api.get_list('get_list')
				if (code !== 200) return
				this.list = data
			},
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
			this.getList()
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
