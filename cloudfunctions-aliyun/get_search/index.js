'use strict';

// 获取数据库引用
const db = uniCloud.database()
const $ = db.command.aggregate

exports.main = async (event, context) => {
	const {value, user_id} = event

	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids
	// 获取article 集合
	const {data} = await db.collection('article')
	.aggregate()
	.addFields({ // 追加字段
		is_like: $.in(['$_id', article_likes_ids])
	})
	.project({ // 过滤字段
		content: false
	})
	.match({
		title: new RegExp(value)
	})
	.end()
	return {
		code: 200,
		msg: '请求成功',
		data
	}
};

