import React from "react";

const alphaNumericSort = (arr = []) => {
    const sorter = (a, b) => {
        const isNumber = (v) => (+v).toString() === v;
        const aPart = a.match(/\d+|\D+/g);
        console.log("aPart", aPart)
        const bPart = b.match(/\d+|\D+/g);
        console.log("bPart", bPart)

        let i = 0; let len = Math.min(aPart.length, bPart.length);
        while (i < len && aPart[i] === bPart[i]) { i++; };
        if (i === len) {
            console.log("aPart.length - bPart.length", aPart.length - bPart.length)
            return aPart.length - bPart.length;
        };
        if (isNumber(aPart[i]) && isNumber(bPart[i])) {
            console.log("aPart[i] - bPart[i]", aPart[i] - bPart[i])

            return aPart[i] - bPart[i];
        };
        console.log("aPart[i].localeCompare(bPart[i])", aPart[i].localeCompare(bPart[i]))

        return aPart[i].localeCompare(bPart[i]); };

    arr.sort(sorter);
    const arr1 = arr.sort(sorter);
    console.log("arr.sort(sorter)", arr.sort(sorter))
    return(
        <p>{arr1}</p>
    )
};


export default alphaNumericSort;
