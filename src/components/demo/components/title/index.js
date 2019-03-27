import edit from './edit'
import preview from './preview'
const addEdit={
  type:"title",
  name:"标题设置",
  editName:edit,
  previewName:preview,
  props:{
    name:"我是个标题",
      backgroundColor:"#fff",
      fontColor:"#000000",
      fontSize:15
  }

}


export default {

  created(){
    this.list.push(addEdit)
  }


}
