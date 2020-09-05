'use strict';
// 获取数据库引用
const db = uniCloud.database()
const $ = db.command.aggregate

exports.main = async (event, context) => {
	
	const {user_id, type} = event
	let matchObj = {}
	if (type !== 'all') {
		matchObj = {
			current: true
		}
	}
	// 获取用户 集合
	let userInfo = await db.collection('user').doc(user_id).get()
	userInfo = userInfo.data[0]
	// 获取label 集合
	// const {data} = await db.collection('label').get().catch(err => err)
	const {data} = await db.collection('label')
	.aggregate()
	.addFields({
		current: $.in(['$_id', $.ifNull([userInfo.label_ids, []])])
	})
	.match(matchObj)
	.end()
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data
	}
};
