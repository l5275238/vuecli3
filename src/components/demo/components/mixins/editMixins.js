export default {
    props:{
        details:{

        },
        index:{

        }
    },
    created(){
        this.form=this.$cloneDeep(this.details)
        this.$watch('form',(n,o)=>{
            this.$emit('change',this.form,this.index)

        },{
            deep: true
        })

    },
}
