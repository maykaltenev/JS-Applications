function asyncDemo() {
    console.log('First');

    setTimeout(() => {
        console.log('Inside timeout');
    }, 0);

    console.log('Second');
}
asyncDemo();