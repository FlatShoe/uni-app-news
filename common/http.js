/*
* @Description 网络请求封装
* @auth LHD
* @Date 2020-09-02
*/

/*
* @Description 统一的云函数请求
* @param {Object} option > url:云函数名 data: 请求参数
*/


export default (options) => {
	const {url:name, data={}} = options
	const dataObj = {
		user_id: '5f4e3cbe6bb39c0001e29b07',
		...data
	}
	
	return new Promise ((resolve, reject) => {
		// 发送网络请求
		uniCloud.callFunction({name, data: dataObj})
			.then((res) => {
				const {success, result} = res
				if (!success) reject(result)
				resolve(result)
			})
			.catch(err => reject(err))
	})
}