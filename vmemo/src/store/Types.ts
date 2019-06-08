export class Memo {
    id: string;
    title: string;
    content: string;
    isFavorite: boolean;

    constructor() {
        this.id = new Date().toString();
        this.title = "新建备忘录";
        this.content = " ";
        this.isFavorite = false;
    }
}

const defaultMemo = new Memo();

export class State {
    memos: [Memo];
    activeMemo:Memo | any;
    show:String;

    constructor() {
        this.memos = [defaultMemo];
        this.activeMemo = defaultMemo;
        this.show = 'all';
        this.memos.push(defaultMemo);
    }
}
