let engagement = new Promise(function (resolve, reject) {
    if (guestCount < 100) {
        reject('Wedding too big');
    } else {
        resolve('Lets get married');
    }
});
engagementPromise.then(function (message) {
    console.log('promise fulfilled');
    console.log(message);
})
    .catch(function (reason) {
        console.log('promise rejected');
        console.log(message);
    })
console.log('preparations');