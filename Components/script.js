
// Um componente precisa de dois parametros
// Nome do componente
// Um objeto com as propriedades:   
    // O template que renderizará os elementos do componente
    // Um função 'data' que conterá os dados do componente
Vue.component(
    'greeting',
    {
        template:'<p>Componente Greeting, DATA: {{name}} <button v-on:click="changeName()">Change Name</button></p>',

        data: function(){
            return {
                name: "Yoshi"
            }
        }, 
        methods: {
            changeName: function(){
                this.name = "Mario"
            }
        }
    }
)

var one = new Vue({
    el: '#vue-app-one',
    data: {
       
    },
    methods: {
        
    },
    computed: {
        
    }
})

var two = new Vue({
    el: '#vue-app-two',
    data: {
       
    },
    methods: {
        
    },
    computed: {
        
    }
})