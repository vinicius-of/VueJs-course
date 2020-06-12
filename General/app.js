new Vue({
    el: '#vue-app',
    data: {
        name: "Vinicius",
        job: "Ninja",
        website: "www.google.com",
        age: 0,
        a: 0,
        b: 0,
    },
    methods: {
        greet: function(daytime){
            return `Good ${daytime} ${this.name}`;
        },

        addYear: function(){
            this.age++;
        },

        reduceYear: function(){
            this.age--;
        }
    },
    computed: {
        addToA: function() {
            console.log("addToA");
            return this.a + this.age
        },

        addToB: function() {
            console.log("addToB");
            return this.b + this.age
        }
    }
})