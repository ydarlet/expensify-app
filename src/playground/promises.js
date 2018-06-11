const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Yann Darlet',
            age: 31
        });
        // reject('Something went wrong!');
    }, 3500);
});

console.log('before');

promise
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('This is my other promise');
            }, 3500);
        });
    })
    .then((str) => {
        console.log('does this run ?', str);
    })
    .catch((error) => {
        console.log('error:', error);
    });

console.log('after');