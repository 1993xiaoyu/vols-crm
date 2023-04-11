// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

// const baseURL =
//('https://www.fastmock.site/mock/c919bdc1243c48c3cd5b17074af581a0/api');

const baseURL = '//test.forjhntech.online/api';

// const baseURL = '/api';

export function tutorAdd(params) {
    return net.post(`${baseURL}/system/tutor/add`, params);
}

export function tutorEdit(params) {
    return net.post(`${baseURL}/system/tutor/edit`, params);
}
export function tutorList(params) {
    return net.post(`${baseURL}/system/tutor/list`, params);
}

export function tutorRemove(params) {
    return net.post(`${baseURL}/system/tutor/remove`, params);
}

// 志愿者导入模板下载
export function importTemplate(params) {
    return net.get(`${baseURL}/system/tutor/importTemplate`, params);
}

// 志愿者导入模板导入
export function importData(params) {
    return net.post(`${baseURL}/system/tutor/importData`, params);
}

// 导出
export function exportData(params) {
    return net.post(`${baseURL}/system/tutor/export`, params);
}
