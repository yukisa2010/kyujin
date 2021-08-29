import Search from './components/Search.vue'
import Favorites from './components/Favorites.vue'
import VueRouter from 'vue-router'
import Menu from './components/Menu.vue'
import Tips from './components/Tips.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components: {
            default: Search
        }
    },
    {
        path: '/favorites', 
        component:  Favorites
    },
    {
        path: '/tips', 
        component:  Tips
    },
    {
        path: '/profile', 
        component:  Profile
    },
]

const router = new VueRouter({
    routes
})

new Vue({
    el: "#app",
    components: {
        Menu
    },
    template: `
        <div>
            <Menu/>
                <router-view></router-view>
            </App>
        </div>
    `,
    router
})