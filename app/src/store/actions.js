import * as types from './types';

export default {
    [types.UPDATE_GREETING]: ({commit}, payload) => {
        console.log('UPDATE_GREETING', payload)
        commit(types.MUTATE_GREETING, payload)
    }
};