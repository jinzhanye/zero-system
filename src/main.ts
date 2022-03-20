import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import router from './router'
import { provide, h, createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: 'http://localhost:3999/graphql'
})

// 缓存实现
const cache = new InMemoryCache()

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
}).use(router)
  .mount('#app')
