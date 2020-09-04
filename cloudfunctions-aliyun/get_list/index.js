'use strict';

// 获取数据库引用
const db = uniCloud.database()
const $ = db.command.aggregate

exports.main = async (event, context) => {
	let matchObj = {}
	const {name, user_id, page=1, pageSize=10} = event

	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids
	// 获取article 集合
	const {data} = await db.collection('article')
	.aggregate()
	.addFields({ // 追加字段
		is_like: $.in(['$_id', article_likes_ids])
	})
	.match(matchObj)
	.project({ // 过滤字段
		content: false
	})
	.skip(pageSize * (page - 1))
	.limit(pageSize)
	.end()
	return {
		code: 200,
		msg: '请求成功',
		data
	}
};
