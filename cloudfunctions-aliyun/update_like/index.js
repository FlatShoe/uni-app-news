'use strict';
// 获取数据库引用
const db = uniCloud.database()
// 操作符
let dbCmd = db.command

exports.main = async (event, context) => {
	
	const {user_id, article_id} = event
	// 获取user 集合
	const userInfo = await db.collection('user').doc('5f4e3cbe6bb39c0001e29b07').get()
	// 获取用户点赞过的文章ID列表
	const article_likes_ids = userInfo.data[0].article_likes_ids
	let dbCmdFuns = null

	
	// 判断当前点赞过的文章ID列表中是否存在该Id
	
	if (article_likes_ids.includes(article_id)) {
		// 更新  移除用户点赞后的文章到用户article_likes_ids数组字段中
		dbCmdFuns = dbCmd.pull(article_id)
	} else {
		// 更新  追加用户点赞后的文章到用户article_likes_ids数组字段中
		dbCmdFuns = dbCmd.addToSet(article_id)
	}
	const res = await db.collection('user').doc(user_id).update({article_likes_ids: dbCmdFuns})

	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: userInfo.data[0]
	}
};
