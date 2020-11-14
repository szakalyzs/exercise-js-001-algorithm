"use strict";

/*
0. Tömb feltöltése véletlenszerű egész számokkal:
*/
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randElement(kindOfData) {
    switch (kindOfData) {
        case 'int':
            return Math.floor(Math.random() * 100);
        case 'float':
            return Math.floor(Math.random() * 1000) / 10;
        case 'char':
            return chars.substr(Math.floor(Math.random() * chars.length), 1);
        default: return -1;
    }
}

function fillArray(arr, kindOfData) {
    if (kindOfData == 'mixed') {
        const mix = ['int','float','char'];
        for (let i = 0; i < 10; i += 1) {
            arr.push(randElement( mix[Math.floor(Math.random() * 3)]));
        }
    } else {
        for (let i = 0; i < 10; i += 1) {
            arr.push(randElement(kindOfData));
        }
    }
    return arr;
}
const intArray = [];
fillArray(intArray, 'int');

const floatArray = [];
fillArray(floatArray, 'float');

const mixedArray = [];
fillArray(mixedArray, 'mixed');

console.log(intArray);

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
console.log('1. The least element = ' + (minElement(intArray) + 1) + '-th: ' + intArray[minElement(intArray)]);

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
console.log('2. The greatest element = ' + (maxElement(intArray) + 1) + '-th: ' + intArray[maxElement(intArray)]);

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
console.log('3. Avg of elements = ' + avgOfValue(intArray));

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
console.log('4. Sum of elements = ' + sumOfValue(intArray));

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
console.log('5. Count of even elements = ' + countOfEven(intArray));

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
console.log(floatArray);
console.log('11. Sorted array = ' + bubbleSort(floatArray));

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

console.log(intArray);
console.log('6. The 2nd least element = ' + minXthElement(intArray, 2));

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
console.log('7. The 3th greatest element = ' + maxXthElement(intArray, 3));

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
console.log(mixedArray);
console.log('8. Array contains the number ' + 23 + ': ' + linearSearch(mixedArray, 23));

/*
9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!
*/
function logSearch(arr, reqNum) {
    bubbleSort(arr);
    let start = 0;
    let end = arr.length - 1;
    do {
        mid = Math.floor((end + start) / 2);
        if (reqNum < mid) {
            end = mid;
        } else
            if (reqNum > mid) {
                start = mid;
            }
    } while (reqNum = mid);
}
console.log(intArray);
console.log('9. Array contains the number ' + 23 + ': ' + linearSearch(intArray, 23));

/*
10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt!

14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

16.Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!
*/