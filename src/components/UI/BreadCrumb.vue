<script>
import { h } from 'vue';

export default {
  name: 'BreadCrumb',
  setup(props, { slots }) {
    const items = slots.default();
    const dynamicItems = [];

    // 迭代插槽中的 item, 生成一個動態建立的節點, 並且最後一個 item 不加上 i 標籤
    items.forEach((item, i) => {
      dynamicItems.push(item);
      if (i < items.length - 1) {
        dynamicItems.push(h('i', { class: 'mx-1 not-italic' }, '/'));
      }
    });

    return () =>
      h(
        'div',
        { class: 'flex items-center text-base font-sanstc' },
        dynamicItems
      );
  },
};
</script>
