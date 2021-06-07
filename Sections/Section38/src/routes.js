import Home from './components/Home.vue'
import Header from './Header.vue'

const User = resolve => require.ensure(['./components/user/User.vue'],
  () => resolve(require('./components/user/User.vue')));
const UserStart = resolve => require.ensure(['./components/user/UserStart.vue'],
  () => resolve(require('./components/user/UserStart.vue')));
const UserDetail = resolve => require.ensure(['./components/user/UserDetail.vue'],
  () => resolve(require('./components/user/UserDetail.vue')));
const UserEdit = resolve => require.ensure(['./components/user/UserEdit.vue'],
  () => resolve(require('./components/user/UserEdit.vue')));

export const routes = [
  {
    path: '/VueJS-Course/Sections/Section38/', name: 'home', components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/VueJS-Course/Sections/Section38/user', components: {
      default: User,
      'header-bottom': Header
    }, children: [
      { path: '', component: UserStart },
      {
        path: ':id', component: UserDetail, props: true, beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
    ]
  },
  { path: '/VueJS-Course/Sections/Section38/redirect-me', redirect: '/user' },
  { path: '*', redirect: '/VueJS-Course/Sections/Section38/' }
]