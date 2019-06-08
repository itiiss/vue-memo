function filter(state) {
    if (state.show === 'all') {
        return state.memos || {};
    }
    else if (state.show === 'favorite') {
        return state.memos.filter(memo => memo.isFavorite) || {};
    }
}
const show = (state) => state.show;
const activeMemo = (state) => state.activeMemo;
export default {
    filter,
    show,
    activeMemo
};
//# sourceMappingURL=getter.js.map