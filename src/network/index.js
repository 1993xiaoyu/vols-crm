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

export function saveJcInfo(params) {
    return net.post('/api/saveJcInfo', params);
}
