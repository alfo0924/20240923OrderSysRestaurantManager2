import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import InventoryManagement from '../views/InventoryManagement.vue'
import StaffManagement from '../views/StaffManagement.vue'
import ReportsAndAnalysis from '../views/ReportsAndAnalysis.vue'
import SystemSettings from '../views/SystemSettings.vue'
import EmployeeManagement from '../views/EmployeeManagement.vue'
import ScheduleManagement from '../views/ScheduleManagement.vue'

import CustomerRelationship from '../views/CustomerRelationship.vue'
import SupplierManagement from '../views/SupplierManagement.vue'
import MemberManagement from '../views/MemberManagement.vue'
import PromotionManagement from '../views/PromotionManagement.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: InventoryManagement,
        meta: { requiresAuth: true }
    },
    {
        path: '/staff',
        name: 'Staff',
        component: StaffManagement,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/reports',
        name: 'Reports',
        component: ReportsAndAnalysis,
        meta: { requiresAuth: true }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: SystemSettings,
        meta: { requiresAuth: true }
    },
    {
        path: '/employees',
        name: 'Employees',
        component: EmployeeManagement,
        meta: { requiresAuth: true }
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: ScheduleManagement,
        meta: { requiresAuth: true }
    },
    {
        path: '/crm',
        name: 'CustomerRelationship',
        component: CustomerRelationship,
        meta: { requiresAuth: true }
    },
    {
        path: '/suppliers',
        name: 'Suppliers',
        component: SupplierManagement,
        meta: { requiresAuth: true }
    },
    {
        path: '/members',
        name: 'Members',
        component: MemberManagement,
        meta: { requiresAuth: true }
    },
    {
        path: '/promotions',
        name: 'Promotions',
        component: PromotionManagement,
        meta: { requiresAuth: true }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/login')
    } else {
        next()
    }
})

export default router