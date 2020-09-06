'use strict';

const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command

exports.main = async (event, context) => {
	const {
	user_id, // 用户ID
	article_id, // 文章ID
	content // 评论内容
	} = event
	
	let user = await db.collection('user').doc(user_id).get()
	user = user.data[0]
	
	let commentObj = {
		comment_id: genID(5), // 评论
		content, // 评论内容
		create_time: new Date().getTime(), // 创建时间
		author: {
			author_id: user._id, // 作者ID
			author_name: user.name, // 作者名称
			abator: user.avatar, // 作者头像
			proressional: user.proressional // 专业
		},
		replys: []
	}
	
	await db.collection('article').doc(article_id).update({
		comments: dbCmd.unshift(commentObj)
	})
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据更新成功'
	}
};

function genID (length) {
	return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}
