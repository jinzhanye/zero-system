<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <ul v-if="result && result.users">
      <li v-for="user of result.users" :key="user.name">
        {{ user.name }} | {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const { result } = useQuery(gql`
      query getUsers {
        users {
          name
          email
        }
      }
    `)

    return {
      result
    }
  }
})
</script>
