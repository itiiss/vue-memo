import {State, Memo} from './Types'


function filter(state: State) {
    if(state.show === 'all') {
        return state.memos || {};
    } else if (state.show === 'favorite') {
        return state.memos.filter(memo => memo.isFavorite) || {};
    }
}

const show = (state:State) => state.show;

const activeMemo = (state:State) => state.activeMemo;

export default {
    filter,
    show,
    activeMemo
};
