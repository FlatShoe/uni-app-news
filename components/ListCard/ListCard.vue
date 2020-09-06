<!-- 
@Description 选项卡视图自定义组件
@auth LHD
@Date 2020-09-03
 -->
<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="list-card">
			<view class="list-card-img">
				<img :src="item.cover[0]" mode="aspectFill" />
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>{{item.title}}</text>
					<!-- 收藏自定义组件 -->
					<Likes :item="item" />
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<div class="list-card-content-des-label-item">{{item.classify}}</div>
					</view>
					<text class="list-card-content-des-browse">{{item.browse_count}}浏览</text>
				</view>
			</view>
		</view>

		<!-- 多图卡片 -->
		<view v-if="item.mode === 'column'" class="list-card mode-column">
			<view class="list-card-content">
				<view class="list-card-img">
					<view v-if="cIndex < 3" class="list-card-img-item" :key="cIndex" v-for="(cItem, cIndex) in item.cover">
						<img :src="cItem" mode="aspectFill" />
					</view>
				</view>
				<view class="list-card-content-title">
					<text>{{item.title}}</text>
					<!-- 收藏自定义组件 -->
					<Likes :item="item" />
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<div class="list-card-content-des-label-item">{{item.classify}}</div>
					</view>
					<text class="list-card-content-des-browse">{{item.browse_count}}浏览</text>
				</view>
			</view>
		</view>


		<!-- 大图卡片 -->
		<view v-if="item.mode === 'image'" class="list-card mode-image">
			<view class="list-card-img">
				<img :src="item.cover[0]"
				 mode="aspectFill" />
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>{{item.title}}</text>
					<!-- 收藏自定义组件 -->
					<Likes :item="item" />
				</view>
				<view class="list-card-content-des">
					<view class="list-card-content-des-label">
						<div class="list-card-content-des-label-item">{{item.classify}}</div>
					</view>
					<text class="list-card-content-des-browse">{{item.browse_count}}浏览</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				default: 'base'
			},
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			/*
			* @Description 打开详情页
			* return undefined
			*/
			open () {
				const item = this.item
				this.$emit('_click', item)
				const params = {
					_id: item._id,
					title: item.title, 
					create_time: item.create_time, 
					thumbs_up_count: item.thumbs_up_count, 
					browse_count: item.browse_count,
					author: item.author
				}
				console.log(params)
				uni.navigateTo({
					url: `/pages/home-detail/home-detail?params=${JSON.stringify(params)}`
				})
			}
		}
	}
</script>

<style lang="less">
	.list-card {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px rgba(1, 96, 87, .1);
		box-sizing: border-box;
		.list-card-img {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}

		.list-card-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			padding-left: 10px;

			.list-card-content-title {
				position: relative;
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				padding-right: 30px;
				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.list-card-content-des {
				display: flex;
				justify-content: space-between;
				font-size: 14px;

				.list-card-content-des-label {
					.list-card-content-des-label-item {
						padding: 0 5px;
						margin: 5px;
						border-radius: 15px;
						color: rgb(1, 96, 87);
						border: 1px solid rgb(1, 96, 87);
					}
				}

				.list-card-content-des-browse {
					color: #999;
					line-height: 1.5;
				}
			}
		}

		&.mode-column {
			.list-card-content {
				width: 100%;
				padding-left: 0;
				.list-card-content-title {
					margin-top: 10px;
				}
				.list-card-img {
					display: flex;
					justify-content: space-between;
					margin-top: 10px;
					width: 100%;
					.list-card-img-item {
						flex: 1;
						border-radius: 5px;
						overflow: hidden;
						margin-right: 10px;
						&:last-child {
							margin-right: 0;
						}
						img {
							width: 100%;
							height: 100%;
						}
					}
				}
				.list-card-content-des {
					margin-top: 10px;
				}
			}
		}
		&.mode-image {
			flex-direction: column;
			.list-card-img {
				width: 100%;
				height: 100px;
				img {
					width: 100%;
					height: auto;
				}
			}
			.list-card-content {
				padding-left: 0;
				margin-top: 10px;
				.list-card-content-des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
