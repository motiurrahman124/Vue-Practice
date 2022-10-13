var app = Vue.createApp({
    data(){
        return{
            msg : "My nam is Motiur",
            info: {
                name: "Motiur",
                facebook: "https://www.facebook.com/motiurrahman.motiurrahman.585",
            },
            htmlCode: '<a href="https://www.facebook.com/motiurrahman.motiurrahman.585">Facebook</a>',
            count: 0,
        };
    },

    methods: {
        getCurrentTime(){
            let ct = new Date();
            return Date();
        },

        increase(){
            this.count = this.count+1;
        },
        increase1(amount){
            this.count = this.count+amount;
        },
        decrease(){
            if(this.count>1)
            {
                this.count = this.count-1;
            }
            
        },
        test(){
            console.log("test");
        }
    }
});

app.mount("#app");