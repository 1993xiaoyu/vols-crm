// 封装一些用的API，不用把URL写在页面中，直接调用即可
import net from '@/utils/request.js';

const baseURL = 'http://test.forjhntech.online/api';

export function getEventList(params) {
    return net.post(`${baseURL}/cockpit/eventList`, params);
}

export function getEventDetails(params) {
    return net.post(`${baseURL}/cockpit/eventDetails`, params);
}

export function getEventStatistics(params) {
    return net.post(`${baseURL}/cockpit/eventStatistics`, params);
}

export function getAedStatisticss(params) {
    return net.post(`${baseURL}/cockpit/aedStatistics`, params);
}

export function getVolunteerStatistics(params) {
    return net.post(`${baseURL}/cockpit/volunteerStatistics`, params);
}
