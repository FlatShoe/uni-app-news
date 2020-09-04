'use strict';

// 获取数据库引用
const db = uniCloud.database()

exports.main = async (event, context) => {
	let matchObj = {}
	const {name, page=1, pageSize=10} = event
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}
	// 获取article 集合
	const {data} = await db.collection('article')
	.aggregate()
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
