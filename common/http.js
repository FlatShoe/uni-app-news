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
	return new Promise ((resolve, reject) => {
		const {url:name, data={}} = options
		// 发送网络请求
		uniCloud.callFunction({name, data})
			.then((res) => {
				const {success, result} = res
				if (!success) reject(result)
				resolve(result)
			})
			.catch(err => reject(err))
	})
}