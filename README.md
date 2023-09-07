# Ionic Vue Input Mask

[![npm](https://img.shields.io/npm/v/ionic-vue-input-mask.svg)](https://www.npmjs.com/package/ionic-vue-input-mask)
[![npm](https://img.shields.io/npm/dt/ionic-vue-input-mask.svg)](https://www.npmjs.com/package/ionic-vue-input-mask)
[![npm](https://img.shields.io/npm/l/ionic-vue-input-mask.svg)](https://www.npmjs.com/package/ionic-vue-input-mask) 

A lightweight (2KB gzipped) and dependency free mask input created specific for Vue.js

## [Docs and Demo](https://vuejs-tips.github.io/vue-the-mask)

## Install

```
yarn add npm i ionic-vue-input-mask
or
npm i -S npm i ionic-vue-input-mask
```

## Usage (two flavors)

### Global as plugin

```javascript
import Mask from 'ionic-vue-input-mask'
Vue.use(Mask)
```

### Global as directive

```javascript
import {VMask} from 'ionic-vue-input-mask'
Vue.directive('mask', VMask)
```

### Local (as directive)

```javascript
import {VMask} from 'ionic-vue-input-mask'
export default {
  directives: {VMask}
}
```


### Input

```html
<input v-mask="'##/##/####'" />
```

### Ion Input

```html
<ion-input v-mask="'##/##/####'" />
```

### Multiple masks

```html
<input v-mask="['##/##/####', '##-##-####']" />
```



## Tokens

```javascript
'#': {pattern: /\d/},
'X': {pattern: /[0-9a-zA-Z]/},
'S': {pattern: /[a-zA-Z]/},
'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
'!': {escape: true}
```

## Properties

| Property    | Required | Type                    | Default | Description                                |
|-------------|----------|-------------------------|---------|--------------------------------------------|
| value       | false    | String                  |         | Input value or v-model                     |
| mask        | **true** | String, Array           |         | Mask pattern                               |
| masked      | false    | Boolean                 | false   | emit value with mask chars, default is raw |
| placeholder | false    | String                  |         | Same as html input                         |
| type        | false    | String                  | 'text'  | Input type (email, tel, number, ...)       |
| tokens      | false    | Object                  | [tokens](#tokens) | Custom tokens for mask           |

## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/vuejs-tips/v-tag-input.svg/issues) and/or [pull requests](https://github.com/vuejs-tips/v-tag-input.svg/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests. Your name will be added to the hall of fame ;)

![The Mask Wolf](https://raw.githubusercontent.com/vuejs-tips/vue-the-mask/master/img/the-mask-wolf.gif)


## Hall of Fame
### Contributors
- [VueTips](https://github.com/vuejs-tips)
- [Dominic Monteiro](https://github.com/dominicmonteiro)


### [Based on Vue-The-Mask](https://github.com/vuejs-tips/vue-the-mask)

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
