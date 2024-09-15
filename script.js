let input = document.querySelector('input')
let button = document.querySelector('button')
let h1 = document.querySelector('h1')


// let Regex = /./ یعنی هر چی بود بود
// let Regex = /ab|ac|ad/ حروف هایی که مشخص کردیم پیدا میکند
// let Regex = /a[bcd]/ در اینجا روش اسان شده بالا را میبینیم یعنی اول حرف آ انگلیسی باشد بعد حروفی که مشخص کرده ایم
// let Regex = /a[^bcd]/ کلمه هایی که نمیخواهیم بعد آ انگلیسی بیاید
// let Regex = /a[^bcd ]/ در اینجا با اسپیس گذاشتن میتوانیم جلوگیری کنیم از یافتن کلمه ها
// let Regex = /[a-z]/ پیدا کردن کلمه هایی که در ان از آ تا ز کوچک است
// let Regex = /[a-z]/ پیدا کردن کلمه هایی که در ان از آ تا ز یزرگ است
// let Regex = /[a-z][a-z][a-z][a-z]/ پیدا کردن کلمات بالای چهار حرف
// let Regex = / [a-z][a-z][a-z][a-z] /  پیدا کردن فقط کلمات چهار حرفی با حرف کوچک
// let Regex = / [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] /  پیدا کردن فقط کلمات چهار حرفی با حرف کوچک وبزرگ
// let Regex = / .... / کار بالایی را انجام میدهد

// let Regex = /12+/
// let Regex = /12*/

// let Regex = /hello?/ اختیاری بودن حرف قبل علامت سوال
// let Regex = /\+?98/
// let Regex = /\+?98/

// let Regex = /[0-9]{5}/ اعمال محدودیت
// let Regex = /[a-zA-Z]{3}/ انتخاب کلمه های سه حرفی
// let Regex = /[a-zA-z0-9]{3,100}@gmail.com/

// let Regex = /^[a-zA-Z0-9_]+@gmail\.com$/
// let Regex = /^.+@gmail\.com$/

///////// short hand////////
// let Regex = /\d/ اعداد 0 تا 9
// let Regex = /\D/ هر چیزی جز اعداد 0 تا 9
// let Regex = /\w/ همه اعداد و همه حرف های کوچک و بزرگ و خط تیره
// let Regex = /\W/  هرچیزی جر اعداد و حروف و خط تیره
// let Regex = /\t/ تب
// let Regex = /\s/ فضا های خالی یا اسپیس
// let Regex = /\S/ هر چیزی جز فضا های خالی یا اسپیس
// let Regex = /a\b/ انتخاب کلمه هایی که حرف آ انتهای ان باشد
// let Regex = /a\B/ انتخاب کلمه هایی که حرف آ انتهای ان نباشد
// let Regex = /^\w+@gmail\.com$/

//let Regex = /(\w+\.)+\w+/

// let Regex = /\d+(?=km)/ // عدد هایی انتخاب شود که بعد ان کیلومتر نوشته شده باشد


// let Regex = /\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])/ تاریخ تولد . نمونه => 1402/01/01 


// let Regex = /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/



// input.addEventListener('keyup', () => {
//     input.value = input.value.replace(/:\)/g, '😀')
//     input.value = input.value.replace(/:\(/g, '🙁')
// })



// button.addEventListener('click', () => {
//     if (Regex.test(input.value.trim())) {
//         console.log('yes');
//     }
//     else {
//         console.log('no');
//     }
// })


let comment = 'i am tornado and my telegram id is @tornado and my insta id is @tornado_'
let Regex = /@([\w\.\-\_])+/g


// instagram and telegram link
let newComment = comment.replace(Regex, function (result) {
    return `<a href="${result}">${result}</a>`
})

h1.innerHTML=newComment
