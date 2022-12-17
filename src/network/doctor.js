// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

const baseURL =
    'https://www.fastmock.site/mock/c919bdc1243c48c3cd5b17074af581a0/api';

// const baseURL = 'http://47.98.113.76/api';

export function userAdd(params) {
    return net.post(`${baseURL}/system/user/add`, params);
}

export function userEdit(params) {
    return net.post(`${baseURL}/system/user/edit`, params);
}
export function userList(params) {
    return net.get(`${baseURL}/system/user/list`, params);
}

export function userRemove(params) {
    return net.post(`${baseURL}/system/user/remove`, params);
}

// 导入模板下载
export function importTemplate(params) {
    return net.post(`${baseURL}/system/user/importTemplate`, params);
}

// 导入模板导入
export function importData(params) {
    return net.post(`${baseURL}/system/user/importData`, params);
}

// 导出
export function exportData(params) {
    return net.post(`${baseURL}/system/user/export`, params);
}
