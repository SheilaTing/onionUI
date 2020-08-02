<template>
    <div class="collapse-item">
        <div class="title">

        </div>
        <div class="content">

        </div>
    </div>
</template>

<script>
    export default {
        inject:['eventBus'],
        name:'onionCollapseItem',
        props:{
            title:{
             type:String,
             required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return {
                open:false
            }
        },
        methods:{
            toggle(){

            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>

</style>