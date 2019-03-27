
import loadJs from './loadJs'
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'



Vue.use(Router)
let childList=[]
let routeObj=[]
let printList=[]
loadJs().keys().forEach(key=>{
  let item =loadJs()(key)
  getRoute(item.default,'',childList)
  routeObj= routeObj.concat(item.default)

})



function getRoute(arr,basePath='',list) {
  for(let value of arr){
    if(value.children){

      getRoute(value.children,basePath+value.path,list)
    }
    else {
      value.href=value.path
      value.path=basePath+value.path;

      if(value.isPrint){

        printList.push(value)
      }
      else {
        list.push(value)
      }

    }
  }

}


const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true, meta: { title: '登录', icon: 'table' }, },
  { path: '/404', component: () => import('@/views/404'), hidden: true , meta: { title: '页面丢失啦', icon: 'table' },},


  {
    path: '/',
    component: Layout,
    redirect: '/demo/demo',
    // name: 'Dashboard',
    hidden: true,
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index'),
    //   meta: { title: '首页', icon: 'table' },
    // },],

  },

    ...childList.map(item=>{
        return {
            path: item.path,
            component: Layout,
            redirect: item.path,
            name: "laout",
            children:[
                item
            ]
        }
    }),
  //
  { path: '404', redirect: '/404', hidden: true }
]



let router=new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export  {router}

