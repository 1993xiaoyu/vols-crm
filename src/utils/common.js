export const formatNum = (val) => {
    if (!val) {
        return 0;
    }
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
