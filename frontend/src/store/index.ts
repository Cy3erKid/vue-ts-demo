import { createStore } from "vuex";
import User from "@/types/User";
import _ from "lodash";

export default createStore({
  state: {
    users: {} as User,
  },
  mutations: {
    SET_USER({ state }: any, payload: User) {
      state.users = [payload, ...state.users];
    },
    SET_USERS({ state }: any, payload: User) {
      state.users = payload;
    },
    UPDATE_USER({ commit, getters }: any, user: User) {
      const users = _.filter(getters.users, function (o: any) {
        if (o.id === user.id) {
          return user;
        } else {
          return o;
        }
      });

      commit("SET_USER", users);
    },
    DELETE_USER({ commit, getters }: any, userId: number) {
      const users = _.filter(getters.users, function (o: any) {
        if (o.id !== userId) {
          return o;
        }
      });

      commit("SET_USER", users);
    },
  },
  actions: {
    SET_USERS({ commit }: any, users: User) {
      commit("SET_USERS", users);
    },
    ADD_USER({ commit }: any, users: User) {
      commit("SET_USER", users);
    },
    UPDATE_USER({ commit }: any, users: User) {
      commit("UPDATE_USER", users);
    },
    REMOVE_USER({ commit }: any, id: number) {
      commit("DELETE_USER", id);
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    profile(state, id) {
      return _.filter(state.users, { id: id });
    },
  },
  modules: {},
});
