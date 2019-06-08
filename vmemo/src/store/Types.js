export class Memo {
    constructor() {
        this.id = new Date().toString();
        this.title = "新建备忘录";
        this.content = " ";
        this.isFavorite = false;
    }
}
const defaultMemo = new Memo();
export class State {
    constructor() {
        this.memos = [defaultMemo];
        this.activeMemo = defaultMemo;
        this.show = 'all';
        this.memos.push(defaultMemo);
    }
}
//# sourceMappingURL=Types.js.map