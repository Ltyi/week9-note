<template>
  <!-- 封面圖 -->
  <div
    class="absolute w-full h-[60%] bg-cover bg-opacity-90 top-0 left-0 bg-fixed"
    :style="{
      backgroundImage: form.cover
        ? `url(${require(`@/assets/cover/${form.cover}.jpg`)}) `
        : ''
    }"
  >
    <div
      class="absolute inset-0 bg-white bg-opacity-50 dark:bg-dark-1 dark:bg-opacity-90"
    ></div>
  </div>

  <!-- 筆記詳細 -->
  <div class="relative text-black dark:text-white pb-8 z-50">
    <div class="flex justify-between items-center h-[38px] my-8">
      <app-btn
        class="text-xs bg-light-1 text-black dark:bg-dark-2 dark:text-white"
        @click="back"
      >
        返回列表
      </app-btn>

      <div class="flex items-center">
        <div
          v-if="!isSaved"
          class="px-2 py-1 bg-gray-400 rounded text-xs text-white mr-4"
        >
          尚有進度未儲存
        </div>

        <app-btn
          class="text-xs bg-black text-white dark:bg-white dark:text-black"
          @click="save"
        >
          儲存進度
        </app-btn>
      </div>
    </div>

    <div class="rounded shadow-tile px-5 py-7 bg-light-2 dark:bg-dark-5">
      <!-- 標題 -->
      <div class="flex items-center h-9 text-2xl px-8">
        <input
          type="text"
          class="w-full bg-transparent border-none outline-none"
          placeholder="請輸入標題"
          v-model="form.title"
        />

        <button @click="form.star = !form.star">
          <fa-icon :icon="form.star ? ['fas', 'star'] : ['far', 'star']"></fa-icon>
        </button>
      </div>

      <div class="h-px my-[30px] bg-light-3 dark:bg-dark-6"></div>

      <!-- 內文 -->
      <div class="px-6 leading-7">
        <ckeditor
          :editor="editor"
          :config="editorConfig"
          v-model="form.content"
        ></ckeditor>
      </div>
    </div>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import useNoteDetail from '@/composition/useNoteDetail.js'
import { onMounted, onUnmounted } from '@vue/runtime-core'
import { onBeforeRouteLeave } from 'vue-router'

export default {
  name: 'Note',

  components: {
    ckeditor: CKEditor.component
  },

  setup() {
    const { form, isSaved, back, save } = useNoteDetail()

    const editor = BalloonEditor
    const editorConfig = {
      placeholder: '在此輸入筆記內容，框選文字進行編輯',
      toolbar: [
        'heading',
        '|',
        '|',
        'bold',
        'italic',
        '|',
        'link',
        'blockQuote',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'undo',
        'redo'
      ]
    }

    onBeforeRouteLeave(() => {
      if (!isSaved.value) {
        const answer = window.confirm('進度尚未儲存，是否確定離開?')
        if (!answer) return false
      }

      return
    })

    onMounted(() => {
      window.onbeforeunload = () => {
        if (isSaved.value) {
          window.onbeforeunload = null
        } else {
          return '進度尚未儲存，是否確定離開?'
        }
      }
    })

    onUnmounted(() => {
      window.onbeforeunload = null
    })

    return {
      editor,
      editorConfig,
      form,
      isSaved,
      back,
      save
    }
  }
}
</script>

<style lang="scss">
.ck-content {
  @apply px-8;

  h2 {
    @apply text-xl;
  }

  h3 {
    @apply text-lg;
  }

  h4 {
    @apply text-sm;
  }

  ul {
    list-style: square;
    padding-left: 40px;
  }

  ol {
    list-style: decimal;
    padding-left: 40px;
  }

  a {
    @apply underline cursor-pointer text-link;
  }
}
</style>
