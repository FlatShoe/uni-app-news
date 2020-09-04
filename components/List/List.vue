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
			<ListItem :list="currentData[index]" :load="load[index]" @loadmore="loadmore" />
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
				currentIndex: 0,
				currentData: {}, // 数据懒加载
				load: {}, // 每个分类都拥有自己的分页
				pageSize: 2
			}
		},
		methods: {
			/*
			* @Description 组件触底事件
			* @return undefined
			*/
			loadmore () {
				// 如果已经加载了所有数据，下拉刷新则不再请求
				if (this.load[this.currentIndex].loading === 'noMore') return
				this.load[this.currentIndex].page ++
				this.getList(this.tab[this.currentIndex].name)
			},
			/*
			* @Description获取视图卡相应数据内容
			* @param {String} name 选项卡名字
			* @return undefined
			*/
			async getList (name) {
				const currentIndex = this.currentIndex
				
				if (!this.load[currentIndex]) this.load[currentIndex] = {page: 1,
				loading: 'loading'}
				
				const {code, data} =  await this.$api.get_list({
					url: 'get_list', 
					name,
					page: this.load[currentIndex].page++,
					pageSize: this.pageSize
				})
				if (code !== 200) return
				if (data.length === 0) {
					let oldLoad = {}
					oldLoad.loading = 'noMore'
					oldLoad.page = this.load[currentIndex].page
					
					this.$set(this.load, currentIndex, oldLoad)
				}
				let oldList = this.currentData[currentIndex] || []
				oldList.push(...data)
				this.$set(this.currentData, this.currentIndex, oldList)
			},
			/*
			* @Description swiper组件滑动监听索引，并通过自定义事件传值至父组件
			* @param {Object} e 事件参数对象
			* @return undefined
			*/
			changeCard (e) {
				const {detail: {current}} = e
				this.currentIndex = current
				this.$emit('changeCard', current)
				// 当数据不存在或者数据长度为0 的时候才请求数据
				if (!this.currentData[current] || this.currentData[current].length === 0) this.getList(this.tab[current].name)
				
			}
		},
		created() {
			this.getList('全部')
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
