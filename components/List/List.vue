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
			<ListItem :list="currentData[index]" />
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
				currentData: {}
			}
		},
		methods: {
			/*
			* @Description获取视图卡相应数据内容
			* @param {String} name 选项卡名字
			* @return undefined
			*/
			async getList (name) {
				const {code, data} =  await this.$api.get_list({url: 'get_list', name})
				if (code !== 200) return
				this.$set(this.currentData, this.cardIndex, data)
			},
			/*
			* @Description swiper组件滑动监听索引，并通过自定义事件传值至父组件
			* @param {Object} e 事件参数对象
			* @return undefined
			*/
			changeCard (e) {
				const {detail: {current}} = e
				this.$emit('changeCard', current)
				this.getList(this.tab[current].name)
			}
		},
		created() {
			this.getList('后端开发')
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
