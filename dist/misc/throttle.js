"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(callback, wait) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            callback.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }
    };
}
exports.throttle = throttle;
