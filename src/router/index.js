import App from '../App'

const Home = r => require.ensure([], () => r(require('../page/Home/Home')), 'Home')

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      }
    ]
  }
]
