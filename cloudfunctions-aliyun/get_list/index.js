'use strict';

// 获取数据库引用
const db = uniCloud.database()

exports.main = async (event, context) => {
	const {name} = event
	// 获取article 集合
	const {data} = await db.collection('article')
	.aggregate()
	.match({
		classify: name
	})
	.project({ // 过滤字段
		content: false
	}) 
	.end()
	return {
		code: 200,
		msg: '请求成功',
		data
	}
};
