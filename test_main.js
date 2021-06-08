function helloTest() {
    console.log('test_main');
    console.log('MY_ENV: ', process.env.MY_ENV);
    return '123';
}

helloTest();
