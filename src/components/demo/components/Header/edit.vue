<template>
        <v-form :form="form" :vform="vform" ref="vform" :formSet="formSet" >

        </v-form>
</template>

<script>
    import editMixins from '../mixins/editMixins'
    export default {
        name: "edit",
        mixins:[editMixins],
        data(){
            return{
                formSet:{
                    isFilterBar:true,
                    itemWidth:"100%"

                },
                form:{

                },
                vform:[

                    {
                        key:"name",
                        name:"页面名称",
                        width:'80px'
                    },
                    {
                        key:"detail",
                        name:"页面详情"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
