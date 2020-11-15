"use strict";

/*
0. Tömbök feltöltése véletlenszerűen:
*/
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const mix = ['int', 'char', 'float'];

function randElement(kindOfData) {
    switch (kindOfData) {
        case 'int':
            return Math.floor(Math.random() * 100);
        case 'char':
                return chars.substr(Math.floor(Math.random() * chars.length), 1);
        case 'float':
            return Math.floor(Math.random() * 1000) / 10;
        default: return -1;
    }
}

function fillArray(arr, kindOfData) {
    arr.length = 0;
    if (kindOfData == 'mixed') {
        for (let i = 0; i < 10; i += 1) {
            arr.push(randElement(mix[Math.floor(Math.random() * 3)]));
        }
    } else {
        for (let i = 0; i < 10; i += 1) {
            arr.push(randElement(kindOfData));
        }
    }
    return arr;
}

function fillSpecMixedArray(arr) {
    let countInt;
    let dataType;
    do {
        countInt = 0;
        arr.length = 0;
        for (let i = 0; i < 10; i++) {
            dataType = mix[Math.floor(Math.random() * 2)];
            arr.push(randElement(dataType));
            if (dataType == 'int') {
                countInt += 1;
            }
        }
    } while (countInt != 5);
    return arr;   
}


const array = [];

/*const floatArray = [];
fillArray(floatArray, 'float');
const mixedArray = fillArray('mixed');
const specMixedArray = fillSpecMixedArray();
*/
/*
1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!
*/
function minElement(arr) {
    let min = 0;
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }
    return min;
}
fillArray(array, 'int');
console.log(array);
console.log('1. The least element = ' + (minElement(array) + 1) + '-th: ' + array[minElement(array)]);

/*
2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!
*/
function maxElement(arr) {
    let max = 0;
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
    return max;
}
console.log('2. The greatest element = ' + (maxElement(array) + 1) + '-th: ' + array[maxElement(array)]);

/*
3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!
*/
function avgOfValue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log('3. Avg of elements = ' + avgOfValue(array));

/*
4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!
*/
function sumOfValue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('4. Sum of elements = ' + sumOfValue(array));

/*
5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!
*/
function countOfEven(arr) {
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += 1;
        }
    }
    return even;
}
console.log('5. Count of even elements = ' + countOfEven(array));

/*ELŐRE VESZEM, MERT SZÜKSÉGES A KORÁBBI FELADATOKHOZ.
11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!
*/
function bubbleSort(arr) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return arr;
}
console.log('\n'); 
fillArray(array, 'float');
console.log(array);
console.log('11. Sorted array = ' + bubbleSort(array));

/*
6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!
*/
function minXthElement(arr, xTh) {
    bubbleSort(arr);
    if (xTh > arr.length) {
        return arr[arr.length];
    } else {
        return arr[xTh - 1];
    }
}
console.log('\n'); 
fillArray(array, 'int');
console.log(array);
console.log('6. The 2nd least element = ' + minXthElement(array, 2));

/*
7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!
*/
function maxXthElement(arr, xTh) {
    bubbleSort(arr);
    if (xTh > arr.length) {
        return arr[0];
    } else {
        return arr[arr.length - xTh];
    }
}
console.log('7. The 3th greatest element = ' + maxXthElement(array, 3));

/*
8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!
*/
function linearSearch(arr, reqNum) {
    let i = 0;
    while (arr[i] !== reqNum && i < arr.length) {
        i += 1;
    }
    return (i < arr.length);
}
console.log('\n');
fillArray(array, 'mixed'); 
console.log(array);
console.log('8. Array contains the number ' + 23 + ': ' + linearSearch(array, 23));

/*
9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!
*/
function logSearch(arr, reqNum) {
    bubbleSort(arr);
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (reqNum == arr[mid]) {
            return true;
        } else {
            if (reqNum > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return false;
}
console.log('\n');
fillArray(array, 'int');
console.log(array);
console.log('9. Array contains the number ' + 23 + ': ' + logSearch(array, 23));

/*
10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!
*/
function countOfNumber(arr, reqNum) {
    let numCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === reqNum) {
            numCount += 1;
        }
    }
    return numCount;
}
console.log('\n'); 
fillArray(array, 'mixed');
console.log(array);
console.log('10. Count of number ' + 23 + ' = ' + countOfNumber(array, 23));

/*
12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!
*/
function sortMixedArray(arr) {
    const numsArr = [];
    const othersArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numsArr.push(arr[i]);
        } else {
            othersArr.push(arr[i]);
        }
    }
    arr.length = 0;
    bubbleSort(numsArr);
    arr = numsArr.concat(othersArr);
    return arr;
}
console.log('12. Sorted mixed array = ' + sortMixedArray(array));

/*
13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt!
*/
function insertToArray(arr) {
    bubbleSort(arr);
    var num = Math.floor(Math.random() * 100);
    while (!Number.isInteger(num)) {
        num = Math.floor(Math.random() * 100);
    } 
    console.log('Item to insert: ' + num);
    let i = 0;
    while (arr[i] < num) {
        i += 1;
    }
    arr.splice(i, 0, num);
    return arr;
}
console.log('\n');
fillArray(array, 'int');
console.log(array);
console.log('13. Array with inserted item = ' + insertToArray(array));

/*
14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!
*/
function arrangeSpecMixedArray(arr) {
    const numsArr = [];
    const stringsArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numsArr.push(arr[i]);
        } else {
            stringsArr.push(arr[i]);
        }
    }
    arr.length = 0;
    for (let i = 0; i < 5; i++) {
        arr.push(numsArr[i]);
        arr.push(stringsArr[i]);
    }
    return arr;
}
console.log('\n');
fillSpecMixedArray(array);
console.log(array);
console.log('14. Arranged special mixed array = ' + arrangeSpecMixedArray(array));

/*
15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!
*/
function splitEvenOdd(arr,parity) {
    const parityArr = [];
    for (let i = 0; i < 10; i++) {
        if (arr[i] % 2 == parity) {
            parityArr.push(arr[i]);
        }
    }
    return parityArr;
}
console.log('\n'); 
fillArray(array, 'int');
console.log(array);
console.log('15. Array of even elements = ' + splitEvenOdd(array, 0));
console.log('    Array of odd elements = ' + splitEvenOdd(array, 1));

/*
16.Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!
*/

function intersection(arr1, arr2) {
    const interArray = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (arr1[i] == arr2[j]) {
                interArray.push(arr1[i]);
            }
        }
    }
    return interArray;
}

function symmetricDifference(arr1, arr2) {
    const interArray = intersection(arr1, arr2);
    const added = [];
    const symDiffArr = [];
    for (let i = 0; i < 10; i++) {
        added.push(arr1[i]);
        added.push(arr2[i]);
    }
    for (let i = 0; i < added.length; i++) {
        let j = 0;
        while (added[i] != interArray[j] && j < interArray.length) {
            j += 1;
        }
        if (j >= interArray.length) {
            symDiffArr.push(added[i]);
        }
    }
    return symDiffArr;
}

function union(arr1, arr2) {
    const unionArr = symmetricDifference(arr1, arr2);
    const interArray = intersection(arr1, arr2);
    for (let i = 0; i < interArray.length; i++) {
        unionArr.push(interArray[i]);
    }
    return unionArr;
}

function descartesProduct(arr1, arr2) {
    
}

console.log('\n'); 
fillArray(array, 'int');
console.log(array);
const array2 = [];
fillArray(array2, 'int');
console.log(array2);
console.log('16. Intersection of arrays above = ' + intersection(array, array2));
console.log('    Symmetric difference of arrays above = ' + symmetricDifference(array, array2));
console.log('    Union of arrays above = ' + union(array, array2) + '    (intersect. + symm. diff.)');
