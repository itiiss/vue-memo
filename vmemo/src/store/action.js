import { NEW_MEMO, TOGGLE_FAVORITE, TOGGLE_LIST, UPDATE_MEMO, SET_CURRENT_ACTIVE, DELETE_MEMO } from '@/store/mutation-types';
export default {
    newMemo({ commit }) {
        commit(NEW_MEMO);
    },
    toggleFavorite({ commit }) {
        commit(TOGGLE_FAVORITE);
    },
    deleteMemo({ commit }) {
        commit(DELETE_MEMO);
    },
    toggleList({ commit }, data = { show: 'all' }) {
        commit(TOGGLE_LIST, data);
    },
    updateMemo({ commit }, data = { memo: {} }) {
        commit(UPDATE_MEMO, data);
    },
    setActive({ commit }, data = { memo: {} }) {
        commit(SET_CURRENT_ACTIVE, data);
    }
};
//# sourceMappingURL=action.js.map