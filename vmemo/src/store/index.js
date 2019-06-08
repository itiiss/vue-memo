import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter';
import actions from './action';
import mutations from './mutation';
Vue.use(Vuex);
class Memo {
    constructor() {
        this.id = new Date().toString();
        this.title = "新建备忘录";
        this.content = " ";
        this.isFavorite = false;
    }
}
const defaultMemo = new Memo();
class State {
    constructor() {
        this.memos = [defaultMemo];
        this.activeMemo = defaultMemo;
        this.show = 'all';
        this.memos.push(defaultMemo);
    }
}
const state = new State();
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
//# sourceMappingURL=index.js.map