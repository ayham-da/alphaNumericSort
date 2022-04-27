import React from "react";


const alphaNumericCollator = (arr = []) => {

    const collatorAlphaNumeric = new Intl.Collator(undefined,{numeric: true});

    arr.sort(collatorAlphaNumeric.compare);
    const arr1 = arr.sort(collatorAlphaNumeric.compare);
    console.log("arr.sort(alphaNumericCollator.compare)", arr.sort(collatorAlphaNumeric.compare))
    console.log("arr1", arr1)

    return arr1

};


export default alphaNumericCollator;
