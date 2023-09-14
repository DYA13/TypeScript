"use strict";
const div = (a, b, rounding) => {
    const res = a / b;
    if (rounding) {
        return Math.round(res);
    }
    return res;
};
div(15, 4, true);
div(15, 3);
div(10, 2);
const fetchData = (res) => {
    if (res.status === "pending") {
        res.status;
    }
    if (res.status === "success") {
        res.status;
    }
    if (res.status === "failed") {
        res.error;
    }
};
