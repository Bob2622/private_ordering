module.exports = {
    'root': true,
    'parser': 'babel-eslint',
    'parserOptions': {
        'sourceType': 'module'
    },
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    // 'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'curly': [
            'error',
            'all'
        ],
        'array-bracket-spacing': [
            'error',
            'always'
        ],
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            '1tbs'
        ],
        'comma-spacing': [
            'error',
            { 
                'before': false, 
                'after': true 
            }
        ]
    },
    'plugins': [
        'html'
    ]
};