// src/index.js
import VMask from './v-maskio';

const install = (app) => {
  app.directive('maskio', VMask);
};

export default {
  install,
};