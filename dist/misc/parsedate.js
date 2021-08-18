"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateDates = exports.parseDate = void 0;
function parseDate(datetime) {
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    const inputdate = new Date(datetime); // UTC-time from server (Z)
    const now = new Date();
    const inputDateLocalTz = new Date(inputdate.getTime() + now.getTimezoneOffset() * 60);
    const secondsSince = Math.round((now.getTime() - inputDateLocalTz.getTime()) / 1000);
    const days = Math.floor(secondsSince / 86400);
    let output = '';
    if (days) {
        // More than 24 hours old
        const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        if (inputDateLocalTz.getTime() > yesterday.getTime()) {
            output = 'I går';
        }
        else {
            output = `${inputDateLocalTz.getDate()}. ${monthNames[inputDateLocalTz.getMonth()]}.${now.getFullYear() !== inputDateLocalTz.getFullYear() ? ` ${inputDateLocalTz.getFullYear()}` : ''}`;
        }
    }
    else {
        // Less than 24 hours old
        const hours = Math.floor((secondsSince % 86400) / 3600);
        const minutes = Math.floor(((secondsSince % 86400) % 3600) / 60);
        const seconds = secondsSince % 60;
        if (hours) {
            output = hours === 1 ? `${hours} time` : `${hours} timer`;
        }
        else if (minutes) {
            output = `${minutes} min`;
        }
        else if (seconds) {
            output = `${seconds} sek`;
        }
    }
    return output;
}
exports.parseDate = parseDate;
function populateDates() {
    const dateElems = document.querySelectorAll('span[data-timestamp]');
    dateElems.forEach((dateElem) => {
        const formattedDate = parseDate(dateElem.dataset.timestamp);
        if (formattedDate) {
            dateElem.innerText = parseDate(dateElem.dataset.timestamp);
        }
    });
}
exports.populateDates = populateDates;
