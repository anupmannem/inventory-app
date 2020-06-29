module.exports = {    
    env: {
        node: true,
        commonjs: true,
        es6: true
    },
    extends: [
        "airbnb-base"
    ],
    global: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
    }
};
