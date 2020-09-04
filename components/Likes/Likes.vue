<!-- 
 @Description 收藏自定义组件
 @auth LHD
 @Date 2020-09-04
 -->
<template>
	<view class="icon iconfont"
				@click.stop="likeTap"
				>{{like ? '&#xe601;' : '&#xe600;'}}</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				like: false
			}
		},
		methods: {
			/*
			* @Description 点赞操作
			* @return undeinfed
			*/
			likeTap () {
				this.like = !this.like
				this.setUpdataLikes()
			},
			/*
			* @Description 更新点赞
			* @return undefined
			*/
			async setUpdataLikes () {
				uni.showLoading()
				const {code} = await this.$api.update_like({
					url: 'update_like',
					article_id: this.item._id
				}).catch(err => {
					uni.hideLoading()
				})
				if (code !== 200) return
				uni.hideLoading()
				uni.showToast({
					title: this.like ? '收藏成功' : '取消收藏'
				})
			}
		},
		watch: {
			item (newVal) {
				this.like = this.item.is_like
			}
		},
		created () {
			this.like = this.item.is_like
		}
	}
</script>

<style lang="less">
	.icon {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		font-size: 22px;
		color: #f07373;
	}
</style>
