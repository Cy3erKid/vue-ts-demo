import { createStore } from "vuex";
import User from "@/types/User";
const _ = require('lodash')

const userModule = {
  state: () => {
    users: []
  },
  actions: {
    ListUser({ commit }: any, users: User) {
      commit("SET_USERS", users);
    },
  },
  mutations: {
    SET_USERS({ state }: any, users: User) {
      state.users = users;
    },
    UPDATE_USER({ commit,getters }: any, user: User) { 
      const users = _.filter(getters.users,function(o: any){
        if(o.id === user.id){
          return user;
        }else{
          return o;
        }
      })
      commit("SET_USER",users);
    },
    DELETE_USER({commit,getters}: any, userId: number){
      const users = _.filter(getters.users,function(o: any){
        if(o.id !== userId){
          return o;
        }
      })
      commit("SET_USER",users);
    }
  },
  getters: {
    getUsers({ state }: any) {
      return state.users;
    },
  },
};

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: userModule,
  },
});
