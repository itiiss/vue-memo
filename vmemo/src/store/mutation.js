import { NEW_MEMO, TOGGLE_LIST, TOGGLE_FAVORITE, DELETE_MEMO, UPDATE_MEMO, SET_CURRENT_ACTIVE } from './mutation-types';
export default {
    [NEW_MEMO](state, data = { newMemo: {
            id: new Date().toString(),
            title: '',
            content: '',
            favorite: false,
        } }) {
        // @ts-ignore
        state.memos.push(data.newMemo);
        state.activeMemo = data.newMemo;
    },
    [TOGGLE_FAVORITE](state) {
        state.activeMemo.isFavorite = !state.activeMemo.isFavorite;
    },
    [DELETE_MEMO](state) {
        for (let i = 0; i < state.memos.length; i++) {
            if (state.memos[i].id === state.activeMemo.id) {
                state.memos.splice(i, 1);
                state.activeMemo = state.memos[0] || {};
            }
        }
    },
    [TOGGLE_LIST](state, data) {
        state.show = data.show;
    },
    [UPDATE_MEMO](state, data) {
        state.memos.forEach((memo) => {
            if (memo.id === data.id) {
                memo = data;
            }
        });
    },
    [SET_CURRENT_ACTIVE](state, data) {
        state.activeMemo = data;
    }
};
//# sourceMappingURL=mutation.js.map