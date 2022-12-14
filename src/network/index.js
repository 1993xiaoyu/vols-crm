// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

// const baseURL =
//     'https://www.fastmock.site/mock/c919bdc1243c48c3cd5b17074af581a0/api';

const baseURL = 'http://47.98.113.76/api';

export function login(params) {
    return net.post(`${baseURL}/login`, params);
}

export function getMenu(params) {
    return net.post(`${baseURL}/system/menu/allList`, params);
}
