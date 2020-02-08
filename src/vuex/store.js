import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        GET_USERS_FROM_API({
            commit
        }) {
            return Axios('http://localhost:3000/users', {
                    method: 'GET'
                })
                .then((responce) => {
                    commit('SET_USERS_TO_VUEX', responce.data)
                })
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        }
    },
    getters: {
        USERS(state) {
            return state.users;
        }
    }
});
export default store;