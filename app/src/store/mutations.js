import * as types from './types';

export default {
    [types.MUTATE_GREETING]: (state, payload) => {
      console.log('MUTATE_GREETING', state, payload)
      state.greeting = `Hello, ${payload}`;
    }
};