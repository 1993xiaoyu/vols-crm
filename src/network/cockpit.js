// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

const baseURL =
    'https://www.fastmock.site/mock/7de9bff710a909df77374614ab83ac91/api';

export function getCensusVoluteer(params) {
    return net.get(`${baseURL}/census/voluteer`, params);
}

export function getCensusAed(params) {
    return net.get(`${baseURL}/census/aed`, params);
}

export function getCensusDuty(params) {
    return net.get(`${baseURL}/census/duty`, params);
}

export function getCensusDoctor(params) {
    return net.get(`${baseURL}/census/doctor`, params);
}

export function getCensusWaring(params) {
    return net.get(`${baseURL}/census/waring`, params);
}

export function getCensusAbnormal(params) {
    return net.get(`${baseURL}/census/abnormal`, params);
}

export function getCensusRespond(params) {
    return net.get(`${baseURL}/census/respond`, params);
}

export function getCensuResponseTime(params) {
    return net.get(`${baseURL}/census/response-time`, params);
}

export function getCensuDisease(params) {
    return net.get(`${baseURL}/census/disease`, params);
}

export function saveJcInfo(params) {
    return net.post('/api/saveJcInfo', params);
}
