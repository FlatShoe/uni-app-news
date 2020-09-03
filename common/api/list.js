import $http from '../http.js'

/*
* @Descript 获取选项卡数据
*/
export const get_label = ({url}) => {
	return $http({url})
}

export const get_list = ({url, name}) => {
	const data = {name}
	return $http({url, data})
}
