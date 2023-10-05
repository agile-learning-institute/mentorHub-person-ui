module.exports = exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "globals": {
        "process": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "import"
    ],
    "rules": {
        'import/no-cycle': 'error',
    }
};
