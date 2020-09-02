import $http from '../http.js'

/*
* @Descript 获取选项卡数据
*/
export const get_label = (url, data) => {
	return $http({url, data})
}

