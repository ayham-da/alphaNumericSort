const isNumber = (v) => (+v).toString() === v;

const sorter = (a, b) => {
    const aPart = a.match(/\d+|\D+/g);
    const bPart = b.match(/\d+|\D+/g);

    let i = 0; let len = Math.min(aPart.length, bPart.length);
    while (i < len && aPart[i] === bPart[i]) { i++; }
    if (i === len) {
        return aPart.length - bPart.length;
    }
    if (isNumber(aPart[i]) && isNumber(bPart[i])) {
        return aPart[i] - bPart[i];
    }

    return aPart[i].localeCompare(bPart[i]);
}


const size = 100;
const items1 = new Array(100).fill(1).map((_, i) => `aaa${Math.random()}`);
const items2 = new Array(1000).fill(1).map((_, i) => `aaa${Math.random()}`);
const items3 = new Array(10000).fill(1).map((_, i) => `aaa${Math.random()}`);

const alphanumericCollator = new Intl.Collator(undefined, { numeric: true });
//const alphaNumericSort = (arr = []) => arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

// const start = new Date();
//
// alphaNumericSort(items1);
//
// console.log('locale compare', (new Date().getTime()) - start.getTime());

// const alphaNumericSort = (arr = []) => arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const start1 = new Date();

items1.sort(alphanumericCollator.compare);


console.log('alphanumericCollator, 100 Items', (new Date().getTime()) - start1.getTime());

const start2 = new Date();
items2.sort(alphanumericCollator.compare);
console.log('alphanumericCollator, 1000 Items', (new Date().getTime()) - start2.getTime());

const start3 = new Date();
items3.sort(alphanumericCollator.compare);
console.log('alphanumericCollator, 10000 Items', (new Date().getTime()) - start3.getTime());




//const start2 = new Date();




//items2.sort(sorter);

//console.log('sorter', (new Date().getTime()) - start2.getTime());
