var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        message2: 'Hello this is message2',
        uid: '10',
        flag: false
    },
    methods: {
        clickBtn() {
            console.log("hi");
        },
        clickBtn2: function() {
            console.log("hi 2");
        }
    }
});