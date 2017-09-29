module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "globals": {
        "angular": true,
        "_":true,
        "d3":true,
        "moment":true,
        "$":true,
        "_IP":true,
        "GLOBALCONFIG":true,
        "AreaPanelDefault":true,
        "go":true,
        "define":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
/*        "indent": [
            "warn",
            4
        ],*/
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};