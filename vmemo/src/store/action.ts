import {
    NEW_MEMO,
    TOGGLE_FAVORITE,
    TOGGLE_LIST,
    UPDATE_MEMO,
    SET_CURRENT_ACTIVE,
    DELETE_MEMO
} from '@/store/mutation-types';

export default {

    newMemo({ commit  }: any): void {
        commit(NEW_MEMO);
    },
    toggleFavorite({ commit }: any): void {
        commit(TOGGLE_FAVORITE);
    },
    deleteMemo({ commit }:any): void {
        commit(DELETE_MEMO);
    },
    toggleList({ commit }: any, data={ show: 'all' }):void {
        commit(TOGGLE_LIST, data);
    },
    updateMemo({ commit }: any, data = { memo:{} }):void {
        commit(UPDATE_MEMO, data);
    },
    setActive({ commit }:any, data = {memo: {}}): void {
        commit(SET_CURRENT_ACTIVE, data);
    }
}
