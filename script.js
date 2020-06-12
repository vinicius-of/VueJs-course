
new Vue({
    el: '#vue-app',
    data: {
       
    },
    methods: {
        
    },
    computed: {
        
    }
})

// New instance of Vue
Vue.component(
    // Nome do componente para ser chamado no código quando este for renderizado
    // Um componente pode ter várias instâncias independentes
    // Cada instância tem seus estados independentes
    "title",

    {
        template: "<p>This is a template</p>",

        // Para manter que cada instância possa manter sua indepedência de seus estados, temos que usar o "data" como função
        data: function(){ 
            return {
                
            }
        },

        methods: {

        }
    }
)