import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '',
                    component: Blog
                }
            ]
        },
        {
            path: '/blog/:title',
            name: 'Blog',
            component: Home,
            children: [
                {
                    path: '',
                    component: Blog
                }
            ]
        },
        {
            path: '*', //无法匹配到对应路由时重定向到主页
            redirect: '/'
        }
    ]
})
