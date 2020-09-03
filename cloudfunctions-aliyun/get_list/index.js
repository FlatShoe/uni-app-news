'use strict';

// 获取数据库引用
const db = uniCloud.database()

exports.main = async (event, context) => {
	
	// 获取article 集合
	const {data} = await db.collection('article')
	.field({ // 过滤字段
		content: false
	}) 
	.get()
	return {
		code: 200,
		msg: '请求成功',
		data
	}
};
