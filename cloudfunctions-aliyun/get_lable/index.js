'use strict';
// 获取数据库引用
const db = uniCloud.database()

exports.main = async (event, context) => {
	// 获取label 集合
	const {data} = await db.collection('label').get().catch(err => err)
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data
	}
};
