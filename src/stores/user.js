import { defineStore } from 'pinia'
import Router from '@/router'
import { request } from '@/js/api.js'

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
      initialLetters() {
        try {
          const firstLetters = this.user?.name.split(' ').map(i => i.charAt(0))
          return firstLetters[0] + firstLetters.pop()
        } catch (error) {
          return ''        
        }
      },
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
    logout(callback) {
      request().post('auth/logout').then(() => {
        localStorage.clear()
        Router.push({ name: 'auth.login' })
        callback(false)
      })
    }
  },
  persist: true
})