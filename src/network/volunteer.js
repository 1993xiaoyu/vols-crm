// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

// const baseURL =
//('https://www.fastmock.site/mock/c919bdc1243c48c3cd5b17074af581a0/api');

const baseURL = 'http://test.forjhntech.online/api';

// const baseURL = '/api';

export function volunteerAdd(params) {
    return net.post(`${baseURL}/system/volunteer/add`, params);
}

export function volunteerEdit(params) {
    return net.post(`${baseURL}/system/volunteer/edit`, params);
}
export function volunteerList(params) {
    return net.post(`${baseURL}/system/volunteer/list`, params);
}

export function volunteerRemove(params) {
    return net.post(`${baseURL}/system/volunteer/remove`, params);
}

// 志愿者导入模板下载
export function importTemplate(params) {
    return net.get(`${baseURL}/system/volunteer/importTemplate`, params);
}

// 志愿者导入模板导入
export function importData(params) {
    return net.post(`${baseURL}/system/volunteer/importData`, params);
}

// 导出
export function exportData(params) {
    return net.post(`${baseURL}/system/volunteer/export`, params);
}
