import edit from './edit'
import preview from './preview'
const title={
    type:"Header",
    name:"页头设置",
    editName:edit,
    previewName:preview,
    props:{
        name:"请设置页面标题",
        detail:"请设置页面详情 "
    }

}


export default {

    created(){
        this.list.push(title)
    }


}
