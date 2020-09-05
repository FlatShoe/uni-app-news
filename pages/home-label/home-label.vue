<!-- 
@Description 管理标签页面
@auth LHD
@Date 2020-09-05
 -->
<template>
	<view class="home-lebel">
		<!-- 我的标签 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-tatle">我的标签</view>
				<view class="label-edit" @click="editLabel">{{isEdit ? '完成' : '编辑'}}</view>
			</view>
			<uni-load-more v-if="isLoading" status="loading" iconType="snow" />
			<view v-if="!isLoading" class="lebel-content">	
				<view class="lebel-content-item" 
							:key="item.id" 
							v-for="(item, index) in mylabels"
							>
					{{item.name}}
					<text v-show="isEdit" class="icon iconfont" @click="delLabel(index)">&#xe7c8;</text>
				</view>
			</view>
			<view class="no-data" v-if="!mylabels.length && !isLoading">当前没有数据</view>
		</view>
		<!-- 推荐标签 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-tatle">标签推荐</view>
			</view>
			<uni-load-more v-if="isLoading" status="loading" iconType="snow" />
			<view v-if="!isLoading" class="lebel-content">
				<view class="lebel-content-item" 
							:key="item._id" 
							v-for="(item, index) in labels"
							 @click="addLabel(index)"
							>{{item.name}}</view>
			</view>
			<view class="no-data" v-if="!labels.length && !isLoading">当前没有数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEdit: false, // 是否编辑
				mylabels: [], // 我的标签
				labels: [], // 推荐标签
				isLoading: false
			};
		},
		methods: {
			/*
			* @Description 全局自定义事件 通知对应事件调用者更新数据
			* @return undefined
			*/
			emit () {
				// 全局自定以事件只能在打开的页面触发
				uni.$emit('labelChage')
			},
			/*
			* @Description 获取标签数据
			* @return undefined
			*/
			async getLabels () {
				this.isLoading = true
				const {code, data, type} = await this.$api.get_label({
					url: 'get_label',
					type: 'all'
				})
				if (code !== 200) return
				this.isLoading = false
				this.mylabels = data.filter(item => item.current)
				this.labels = data.filter(item => !item.current)
			},
			/*
			* @Description 编辑标签
			* @return undefined
			*/
			editLabel () {
				
				if (this.isEdit) {
					this.isEdit = false
					this.updateLabel()
				} else {
					this.isEdit = true
				}
			},
			/*
			* @Description 将标签移除我的标签列表
			* @param {Number} index 当前标签的索引
			* @return undefined
			*/
			delLabel (index) {
				this.labels.push(this.mylabels[index])
				this.mylabels.splice(index, 1)
			},
			/*
			* @Description 将标签添加到我的标签列表
			* @param {Number} index 当前标签的索引
			* @return undefined
			*/
			addLabel (index) {
				if (!this.isEdit) return
				this.mylabels.push(this.labels[index])
				this.labels.splice(index, 1)
			},
			/*
			* @Description 编辑后的标签更新至数据库
			* @return undefined
			*/
			async updateLabel () {
				const label = []
				this.mylabels.forEach(item => {
					label.push(item._id)
				})
				uni.showLoading()
				const {code} = await this.$api.update_label({
					url: 'update_label',
					label
				}).catch(err => uni.hideLoading())
				if (code !== 200) return
				this.emit()
				uni.hideLoading()
				uni.showToast({
					title: '更新成功',
					icon: 'none'
				})
			}
		},
		onLoad () {
			this.getLabels()
		}
	}
</script>

<style lang="less">
	page {
		background-color: #f5f5f5;
	}
	.home-lebel {
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;
			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border: 1px solid #f5f5f5;
				.label-edit {
					color: #30b33a;
					font-weight: 700;
				}
			}
			.lebel-content {
				display: flex;
				flex-wrap: wrap;
				padding: 0 15px 15px 15px;
				.lebel-content-item {
					position: relative;
					padding: 2px 5px;
					margin: 12px 10px 0 0;
					border-radius: 5px;
					border: 1px solid #666;
					font-size: 14px;
					color: #666;
					.icon {
						position: absolute;
						top: -15px;
						right: -15px;
						font-size: 28px;
						color: #d81e06;
						border-radius: 50%;
					}
				}
			}
		}
	}
	.no-data {
		width: 100%;
		text-align: center;
		color: #999;
		font-size: 14px;
		padding: 50px 0;
	}
</style>
