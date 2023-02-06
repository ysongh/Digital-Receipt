import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddReceipt from '../views/AddReceipt.vue'
import MyReceipts from '../views/MyReceipts.vue'
import ReceiptDetail from '../views/ReceiptDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-receipt',
    name: 'AddReceipt',
    component: AddReceipt
  },
  {
    path: '/my-receipts',
    name: 'MyReceipts',
    component: MyReceipts
  },
  {
    path: '/receipt-detail/:id',
    name: 'ReceiptDetail',
    component: ReceiptDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
