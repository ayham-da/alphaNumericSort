import React from 'react';

const alphaNumericSort = (arr = []) => {
    const sorter = (a, b) => {
        const isNumber = (v) => (+v).toString() === v;
        const aPart = a.match(/\d+|\D+/g);
        const bPart = b.match(/\d+|\D+/g);
        let i = 0; let len = Math.min(aPart.length, bPart.length);
        while (i < len && aPart[i] === bPart[i]) { i++; };
        if (i === len) {
            return aPart.length - bPart.length;
        };
        if (isNumber(aPart[i]) && isNumber(bPart[i])) {
            return aPart[i] - bPart[i];
        };
        return aPart[i].localeCompare(bPart[i]); };
    arr.sort(sorter);
};


export default alphaNumericSort;
