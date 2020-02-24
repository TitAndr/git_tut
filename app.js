// Swap min and max of array
//================================================================
// function swap(array) {
//     var mx = array.indexOf(Math.max(...array)),
//         mn = array.indexOf(Math.min(...array));
//     var temp = array[mx];
//     array[mx] = array[mn];
//     array[mn] = temp;

//     return array;
// }
// var arr = [1, 0, 54, 2, 69, 58, 999, 1554, 56, 98, 20];
// console.log(swap(arr));
//========================================================================================
//
// Counting number of chars
//===================================================================
// var str = 'aaaaaaaaaaaaaaaaaaaaa';
// var res = str.split('').reduce(function (a, e) {
//     a.hasOwnProperty(e) && (++a[e]) || (a[e] = 1);
//     return a;
// }, {});
// console.log(res);
//=======================================================================================
//

//===== Generator strings =================
// function getStr() {
//     let str = '';
//     let word = '';
//     let pos = 'abcdefghijklmnopqrstuvwxyz'
//     for (let i = 0; i < Math.round(Math.random() * 15); i++) {
//         for (let j = 0; j < Math.round(Math.random() * 10); j++) {
//             word += pos.charAt(Math.round(Math.random() * pos.length));
//         }
//         str += word + " ";
//     }
//     return str;
// }

// console.log(getStr());
//========== Validator Phone ===================
// let phone = document.getElementById('phone');
// phone = phone.mask("+38(999) 999-99-99");
//==========================

// ====== Palindrom of file ====================
// let fileInput = document.querySelector('#file');

// fileInput.addEventListener('change', function(event) {
//     let file = fileInput.files[0];
//     let reader = new FileReader();
//     reader.onload = function(event) {
//         // console.log(reader.result);
//         palindrom(reader.result.split('\r\n'));
//     };
//     reader.readAsText(file);

// });

// function palindrom(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(".");
//         str2 = arr[i].toLowerCase().split('').reverse().join('');
//         if(str2 == arr[i]) {
//             console.log(arr[i]);
//         }
//     }
// }


// =============== CHESS (Horse) =================================================================================================
// let chess = [
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
// ];

// function draw() {
//     let out = '';
//     let m = 0;
//     for (let i = 0; i < chess.length; i++) {
//         let arr = chess[i];
//         for (let k = 0; k < arr.length; k++) {
//             if(m%2 == 0){
//                 out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
//             }
//             else {
//                 out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
//             }
//             m++;
//         }
//         m++;
//     }
//     document.querySelector('#field').innerHTML = out;
//     document.querySelectorAll('.chess-block').forEach(function(element) {
//         element.onclick = horse;
//     });
// }

// draw();

// function horse() {
//     document.querySelectorAll('.chess-block').forEach(function(element) {
//         element.classList.remove('green');
//         element.classList.remove('active');
//     });
//     let x = this.dataset.x;
//     let y = this.dataset.y;
//     this.classList.add('green');
//     if(+x+2 < 8 && +y+1 <8) {
//         document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y+1}"]`).classList.add('active');
//     }
//     if(+x+2 < 8 && +y-1 >= 0) {
//         document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y-1}"]`).classList.add('active');
//     }
//     if(+x-2 >=0 && +y+1 <8) {
//         document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y+1}"]`).classList.add('active');
//     }
//     if(+x-2 >=0 && +y-1 >=0) {
//         document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y-1}"]`).classList.add('active');
//     }
//     if(+x+1 <8 && +y-2 >=0) {
//         document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y-2}"]`).classList.add('active');
//     }
//     if(+x-1 >=0 && +y-2 >=0) {
//         document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y-2}"]`).classList.add('active');
//     }
//     if(+x+1 <8 && +y+2 <8) {
//         document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y+2}"]`).classList.add('active');
//     }
//     if(+x-1 >=0 && +y+2 <8) {
//         document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y+2}"]`).classList.add('active');
//     }
// }
//===================================================================================================================================================

// ============== Zodiak =========================================================
// document.querySelector('button').onclick = function() {
//     let day = +document.querySelector('#day').value;
//     let month = +document.querySelector('#month').value;
//     if((month == 3 && day >= 21) || (month == 4 && day <=19)) {
//         console.log('Oven');
//     }
//     else if((month == 4 && day >= 21) || (month == 5 && day <=20)) {
//         console.log('Teletz');
//     }
//     else if((month == 6 && day >= 21) || (month == 6 && day <=20)) {
//         console.log('Bliznetzi');
//     }
//     else if((month == 6 && day >= 21) || (month == 7 && day <=22)) {
//         console.log('Rak');
//     }
//     else if((month == 7 && day >= 23) || (month == 8 && day <=22)) {
//         console.log('Lev');
//     }
//     else if((month == 8 && day >= 23) || (month == 9 && day <=22)) {
//         console.log('Deva');
//     }
//     else if((month == 9 && day >= 23) || (month == 10 && day <=22)) {
//         console.log('Vesi');
//     }
//     else if((month == 10 && day >= 23) || (month == 11 && day <=21)) {
//         console.log('Skorpion');
//     }
//     else if((month == 11 && day >= 22) || (month == 12 && day <=21)) {
//         console.log('Streletz');
//     }
//     else if((month == 12 && day >= 22) || (month == 1 && day <=19)) {
//         console.log('Kozerog');
//     }
//     else if((month == 1 && day >= 20) || (month == 2 && day <=18)) {
//         console.log('Vodoley');
//     }
//     else if((month == 2 && day >= 19) || (month == 3 && day <=20)) {
//         console.log('Vodoley');
//     }
// 
