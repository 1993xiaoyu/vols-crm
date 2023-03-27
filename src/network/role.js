// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

//const baseURL =
//    'https://www.fastmock.site/mock/c919bdc1243c48c3cd5b17074af581a0/api';

const baseURL = '//test.forjhntech.online/api';

export function roleAdd(params) {
    return net.post(`${baseURL}/system/role/add`, params);
}

export function roleEdit(params) {
    return net.post(`${baseURL}/system/role/edit`, params);
}
export function roleList(params) {
    return net.post(`${baseURL}/system/role/list`, params);
}

export function roleRemove(params) {
    return net.post(`${baseURL}/system/role/remove`, params);
}
