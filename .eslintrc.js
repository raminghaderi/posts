module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "jest": true,
        "es6": true
    },
    "globals": {
        module: true,
        process: true,
        Buffer: true,
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "object-curly-spacing": ["error", "always"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-console": "warn",
        "no-eval": "error",
        "import/first": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "import/order": ["error", {
            "newlines-between": "always",
            "groups": ["builtin", "external", "internal", "index", "sibling", "parent"]
        }],
        "no-multiple-empty-lines": ["error", { "max": 1 }]
    },
    "plugins": ["import", "react", "react-hooks"],
    root: true,
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // default to latest and warns if missing
                                 // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            { "property": "freeze", "object": "Object" },
            { "property": "myFavoriteWrapper" }
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            { "name": "Link", "linkAttribute": "to" }
        ]
    },
};
