import Vue from 'vue';
import * as types from './types';

export default {
    [types.UPDATE_GREETING]: ({commit}, payload) => {
        console.log('UPDATE_GREETING', payload);

        Vue.http.get('http://localhost:3000/api/users')
          .then(function(res) {
            fetchMemebersSuccess(res)
          })
          .catch(function(res) {
            console.log('failed to fetch members');
          })

        function fetchMemebersSuccess(res) {
          commit(types.MUTATE_GREETING, res.body[payload].fullName)
        }
    }
};