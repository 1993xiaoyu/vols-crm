export const formatNum = (val) => {
    if (!val) {
        return 0;
    }
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const filterParams = (data) => {
    const currObjKeys = Object.keys(data);
    const currData = {};
    currObjKeys.map((item) => {
        if (data[item]) {
            currData[item] = data[item];
        }
    });

    return currData;
};

export const getQuery = (query) => {
    const url = location.href;
    // str为？之后的参数部分字符串
    const str = url.substr(url.indexOf('?') + 1);
    // arr每个元素都是完整的参数键值
    const arr = str.split('&');
    // result为存储参数键值的集合
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        // item的两个元素分别为参数名和参数值
        const item = arr[i].split('=');
        result[item[0]] = item[1];
    }
    return result[query];
};
