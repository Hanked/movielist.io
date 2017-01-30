import * as types from './types';

export default {
    [types.CUSTOM_GREETING]: state => {
        console.log('CUSTOM_GREETING', state)
        return state.greeting;
    }
};