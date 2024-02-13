import { defineStore } from 'pinia'
import Router from '@/router'
import Api from '@/js/api'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      token: null,
      menus: null
    }
  },
  getters: () => {
    return {
      getUser: (state) => {
        return state.user
      },
      menus: (state) => {
        return state.menus || []
      },
      isLoggedin: (state) => {
        return state.token !== null
      },
      getToken: (state) => {
        return state.token
      },
      permissions: (state) => {
        return state.permissions
      }
    }
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    setUser(user) {
      this.user = user
    },
    setMenus(menus) {
      this.menus = menus
    },
    logout() {
      Api.post('auth/logout').then(() => {
        this.token = null
        this.user = null
        Router.push({ name: 'auth.login' })
      })
    }
  },
  persist: true
})