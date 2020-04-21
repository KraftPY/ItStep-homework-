function _includes(arr,findEL) {
    let answ = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == findEL || (isNaN(arr[i]) && isNaN(findEL))) {
            answ = true;
            break;
        }
    }
    return answ;
}

function _concat(arr, ...elements) {
    let indexNewElem = arr.length,
        newArr = [...arr];

    for (let i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i]) && (typeof(elements[i][Symbol.isConcatSpreadable]) === 'undefined' || elements[i][Symbol.isConcatSpreadable] == true)) {
            for (let j = 0; j < elements[i].length; j++) {
                newArr[indexNewElem] = elements[i][j];
                indexNewElem++;
            }
        } else if (!Array.isArray(elements[i]) && typeof(elements[i]) === 'object'
                    && (!typeof(elements[i][Symbol.isConcatSpreadable]) === 'undefined' || elements[i][Symbol.isConcatSpreadable] == true)) {
            for (let j = 0; j < elements[i].length; j++) {
                newArr[indexNewElem] = elements[i][j];
                indexNewElem++;
            }
        } else{
            newArr[indexNewElem] = elements[i];
            indexNewElem++;
        }
    }
    return newArr;
}

function _splice(arr, start, deleteCount, ...arrElements) {
    let arrRemoveElem = [],
        newArrStart = [],
        newArrEnd = [],
        delElem = false,
        len = arr.length;

    if (start < 0) {
        start = ((len + start) < 0) ? 0 : len + start;
    }
    deleteCount = (typeof(deleteCount) === 'undefined' || deleteCount >= len - start) ? len - start : deleteCount;
    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i < start + deleteCount) {
            arrRemoveElem.push(arr[i]);
            delElem = true;
        } else if(!delElem){
            if(arrElements != [] && i == start){
                for (let j = 0; j < arrElements.length; j++) {
                    newArrStart.push(arrElements[j]);
                }
                newArrStart.push(arr[i]);
            }else{
                newArrStart.push(arr[i]);
            }
        } else {
            newArrEnd.push(arr[i]);
        }
    }
    if(arrElements == []){
        arr2 = newArrStart;
        for (let i = 0; i < newArrEnd.length; i++) {
            arr2.push(newArrEnd[i]);
        }
    } else if (delElem){
        arr2 = newArrStart;
        for (let i = 0; i < arrElements.length; i++) {
            arr2.push(arrElements[i]);
        }
        for (let i = 0; i < newArrEnd.length; i++) {
            arr2.push(newArrEnd[i]);
        }
    } else {
        arr2 = newArrStart;
    }
    return arrRemoveElem;
}