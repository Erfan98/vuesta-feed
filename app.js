var URL ="https://v1.nocodeapi.com/imerfan/instagram/kvysSdCGreZWHyTo?limit=1000";


const {createApp} = Vue;
createApp({
    data() {
        return {
            images: []
        }
    },
    //method
    methods: {
        print: function () {
            console.log(this.message)
        },
    },
    beforeMount: function () {
        // console.log('mounted')
        axios.get(URL)
            .then(response => {
                this.images = response.data.data
                console.log(this.images)
            })
            .catch(error => {
                console.log(error)
            })
    }
}).mount('#app')