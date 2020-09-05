import $http from '../http.js'

/*
* @Descript 获取选项卡数据
*/
export const get_label = ({url}) => {
	return $http({url})
}
/*
* @Descript 获取文章列表数据
*/
export const get_list = ({url, name, page, pageSize}) => {
	const data = {name, page, pageSize}
	return $http({url, data})
}
/*
* @Descript 文章收藏
*/
export const update_like = ({url, article_id}) => {
	const data = {url, article_id}
	return $http({url, data})
}
/*
* @Descript 搜索结果
*/
export const get_search = ({url, value}) => {
	const data = {url, value}
	return $http({url, data})
}
