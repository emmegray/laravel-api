require('../bootstrap');
window.Vue = require('vue');
const App = require('../components/App.vue');

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
