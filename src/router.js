import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Description from '@/components/Description'
import Game from '@/components/Game'
import Puzzle from '@/components/Puzzle'

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
                    component: Description
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
            path: '/game',
            name: 'Game',
            component: Home,
            children: [
                {
                    path: '',
                    component: Game
                },
                {
                    path: 'puzzle',
                    component: Puzzle
                }
            ]
        },
        {
            path: '*', //无法匹配到对应路由时重定向到主页
            redirect: '/'
        }
    ]
})
