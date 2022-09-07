export default{
    data(){
        return{
           breadList:[] ,
           b:"100"
        }
    },
    created(){
        this.getBreadCrumb();
        console.log(this.b)
    },
    watch:{
        //params query
        //data 计算属性 props $route
        $route(){
            this.getBreadCrumb()
        }
    },
    methods:{
        getBreadCrumb(){
            this.breadList= this.$route.meta.bread||[]
        }
    }
}