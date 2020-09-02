/*
* @Description 批量导出文件
* @auth LHD
* @Date 2020-09-02
*/


/*
* @param api 目录的相对路径
* @param 是否查询子目录
* @param 查询一个文件的后缀
*/
const requierApi = require.context('.', false, /.js$/)


let module = {}

requierApi.keys().forEach(item => {
	if (item === './index.js') return false
	Object.assign(module, requierApi(item))
	return true
})

export default module



