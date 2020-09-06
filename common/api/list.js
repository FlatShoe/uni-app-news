import $http from '../http.js'

/*
* @Description 获取选项卡数据
*/
export const get_label = ({url, type}) => {
	const data = {type}
	return $http({url, data})
}
/*
* @Description 获取文章列表数据
*/
export const get_list = ({url, name, page, pageSize}) => {
	const data = {name, page, pageSize}
	return $http({url, data})
}
/*
* @Description 文章收藏
*/
export const update_like = ({url, article_id}) => {
	const data = {url, article_id}
	return $http({url, data})
}
/*
* @Description 搜索结果
*/
export const get_search = ({url, value}) => {
	const data = {url, value}
	return $http({url, data})
}
/*
* @Description 更新用户的选项卡标签列表
*/
export const update_label = ({url, label}) => {
	const data = {url, label}
	return $http({url, data})
}
/*
* @Description 获取文章详情数据
*/
export const get_detail = ({url, article_id}) => {
	const data = {url, article_id}
	return $http({url, data})
}
/*
* @Description 更新文章评论
*/
export const update_comment = ({url, article_id, content}) => {
	const data = {url, article_id, content}
	return $http({url, data})
}
