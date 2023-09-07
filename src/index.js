import VMask from './directive.js';

const install = (app) => {
  app.directive('mask', VMask);
};

export default install
export { VMask };

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
