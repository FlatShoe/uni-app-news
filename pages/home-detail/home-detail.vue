<!-- 
 @Description 文章详情页
 @auth LHD
 @Date 2020-09-06
 -->
<template>
	<view class="home-detail">
		<!-- 文章详情 -->
		<view class="detail-title">{{foramData.title}}</view>
		<view class="detail-header">
			<view class="detail-header-avatar">
				<img :src="foramData.author.avatar" />
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">{{foramData.author.author_name}}</view>
				<view class="detail-header-content-info">
					<text>{{foramData.create_time}}</text>
					<text>{{foramData.browse_count}} 浏览</text>
					<text>{{foramData.thumbs_up_count}} 赞</text>
				</view>
			</view>
		</view>
		<view class="detail-content">
			<view class="detail-content-html">
				<!-- <uParse :content="foramData.content" :noData="noData" /> -->
				内容
			</view>
			<!-- 展示评论 -->
			<view class="detail-comment">
				<view class="comment-title">最新评论</view>
				<view class="comment-content">
					<!-- 展示评论自定义组件 -->
					<CommentsBox />
				</view>
			</view>
		</view>
		
		<!-- 工具栏 -->
		<view class="detail-bottom">
			<view class="detail-bottom-input" @click="openComment">
				<text class="text">谈谈你的看法</text>
				<text class="icon iconfont">&#xe612;</text>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icons-box">
					<text class="icon iconfont">&#xe6a2;</text>
				</view>
				<view class="detail-bottom-icons-box">
					<text class="icon iconfont">&#xe600;</text>
				</view>
				<view class="detail-bottom-icons-box">
					<text class="icon iconfont">&#xe62b;</text>
				</view>
			</view>
		</view>
		<!-- 底部弹窗 -->
		<uniPopup ref="popup" type="bottom" :maskClick="false">
			<view class="popup-wrap">
				<view class="popup-header">
					<text class="popup-header-item" @click="closeComment">取消</text>
					<text class="popup-header-item" @click="submitComment">发布</text>
				</view>
				<view class="popup-content">
					<textarea 
						class="popup-content-textarea" 
						placeholder="请输入评论内容" 
						fixed maxlength="200"
						v-model="commentsValue"></textarea>
					<view class="popup-content-count">{{commentsValue.length}}/200</view>
				</view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	import uParse from '@/components/feng-parse/parse.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
			uParse,
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		data() {
			return {
				foramData: {}, // 文章数据
				noData: '<p style="text-align: center; color: #666">详情加载中</p>',
				commentsValue: '', // 输入框的值
			};
		},
		methods: {
			/*
			* @Description 获取页面跳转携带过来的参数
			* @param {String} info  参数数据
			* @return undefined
			*/
			getParams (info) {
				this.foramData = JSON.parse(info.params)
			},
			/*
			* @Description 获取文章详情信息
			* @return undefined
			*/
			async get_detail () {
				const {code, data} = await this.$api.get_detail({
					url: 'get_detail',
					article_id: this.foramData._id
				})
				console.log(this.foramData._id)
				if (code !== 200) return
				this.foramData = data
			},
			/*
			* @Description 打开评论发布窗口
			* @return undefined
			*/
			openComment () {
				this.$refs.popup.open()
			},
			/*
			* @Description 关闭评论发布窗口
			* @return undefined
			*/
			closeComment () {
				this.$refs.popup.close()
			},
			/*
			* @Description 发布评论
			* @return undefined
			*/
			submitComment () {
				if (!this.commentsValue) return uni.showToast({
					title: '请输入评论内容',
					icon: 'none'
				})
				this.update_comment(this.commentsValue)
			},
			/*
			* @Description 更新评论内容
			* @param {*} value 评论内容
			* @return undefined
			*/
			async update_comment (content) {
				uni.showLoading()
				const {code} = await this.$api.update_comment({
					url: 'update_comment',
					article_id: this.foramData._id,
					content
				})
				if (code !== 200) return
				this.closeComment()
				uni.hideLoading()
				uni.showToast({
					title: '评论发布成功',
					icon: 'none'
				})
			}
		},
		onLoad(query) {
			this.getParams(query)
			this.get_detail()
		},
		onReady () {
			
		}
	}
</script>

<style lang="less">
	.detail {
		padding: 15px 0 54px 0;
	}
	.detail-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: 700;
		color: #333;
	}
	.detail-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;
		.detail-header-avatar {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.detail-header-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			font-size: 12px;
			padding-left: 10px;
			.detail-header-content-title {
				font-size: 14px;
				color: #333;
			}
			.detail-header-content-info {
				color: #999;
				text {
					margin-right: 10px;
				}
			}
		}
	}
	.detail-content {
		min-height: 500px;
		margin-top: 20px;
		.detail-content-html {
			padding: 0 15px;
		}
		.detail-comment {
			margin-top: 30px;
			.comment-title {
				padding: 10px 15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px solid #fff;
			}
			.comment-content {
				padding: 0 15px;
				border-top: 1px solid #eee;
			}
		}
	}
	
	.detail-bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px solid #f5f5f5;
		background-color: #fff;
		box-sizing: border-box;
		.detail-bottom-input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 10px;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px solid #ddd;
			border-radius: 5px;
			font-size: 14px;
			color: #999;
			.icon {
				color: #f07373;
			}
		}
		.detail-bottom-icons {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			.detail-bottom-icons-box {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
				.icon {
					color: #f07373;
					font-size: 22px;
				}
			}
		}
	}
	
	.popup-wrap {
		background-color: #fff;
		.popup-header {
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #666;
			border-bottom: 1px solid #666;
			.popup-header-item {
				height: 50px;
				line-height: 50px;
				padding: 0 15px;
			}
		}
		.popup-content {
			width: 100%;
			padding: 15px;
			box-sizing: border-box;
			.popup-content-textarea {
				width: 100%;
				height: 200px;
			}
			.popup-content-count {
				display: flex;
				justify-content: flex-end;
				font-size: 12px;
				color: #999;
			}
		}
	}
</style>
