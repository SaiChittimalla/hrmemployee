import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import AddPage from './components/AddPage.vue';
import NavPage from './components/NavPage.vue';
import SidebarPage from './components/SidebarPage.vue';
import SearchPage from './components/SearchPage.vue';
import EmployeSummary from './components/EmployeSummary.vue';
import EditPage from './components/EditPage.vue';
import AttendacePage from './components/AttendacePage.vue'
import CalendarPage from './components/CalendarPage'

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/homepage',
        component: HomePage
    },
    {
        path: '/addpage',
        component: AddPage
    },
    {
        path: '/NavPage',
        component: NavPage
    },
    {
        path: '/SidebarPage',
        component: SidebarPage
    },
    {
        path: '/SerachPage',
        component: SearchPage
    },

    {
        path: '/EmployeSummary',
        component: EmployeSummary
    },
    {
        path: '/EditPage',
        component: EditPage
    },
    {
        path: '/AttendacePage',
        component: AttendacePage
    },
    {
        path: '/Calendarpage',
        component: CalendarPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;