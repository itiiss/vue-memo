<template>
    <div class="note-editor">
        <div class="form-group">
            <input type="text"  name="title" class="title form-control"
                placeholder="请输入标题"
                @input="updateMemo" v-model="Memo.title">
            <textarea name="content" rows="3" class="form-control"
                placeholder="请输入正文"
                @input="updateMemo" v-model="Memo.content"></textarea>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        name: "Editor",
        data: function() {
            return {
                Memo: { title: '', content: ''}
            }
        },
        computed: {
            ...mapGetters([
                'activeMemo'
            ]),
            currentMemo() {
                return this.activeMemo;
            }
        },
        methods: {
            ...mapActions({
                update: 'updateMemo'
            }),
            updateMemo() {
                this.update({
                    memo: this.Memo
                })
            }
        }

    }
</script>

<style>
  .note-editor {
      flex: 3;
  }

  .note-editor textarea {
    box-sizing: border-box;
    height: 100%;
    border: 0;
    border-radius: 0;
    padding-top: 15px;
  }

  .form-group {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin-bottom: 0;
  }

  .form-group textarea {
    flex-grow: 2;
  }

  .title {
    border:0;
  }

</style>
