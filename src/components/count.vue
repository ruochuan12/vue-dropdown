/**
 * @name: 'vue-bus插件',
 * @author: '轩辕Rowboat',
 * @time: '2017-08-06'
 */
 <template>
    <div>{{count}}</div>
 </template>
 <script>
 export default {
     name: 'count',
     data() {
         return {
             // 计数
             count: 0
         };
     },
     created() {
         // 为啥是这里是写到created的呢。
         this.$bus.on('add', (val) => {
             console.log('created compontent count', val);
             this.count = val;
         });
     },
     methods: {
        //  add(event, val) {
        //      this.$bus.on('add', (val) => {
        //          console.log('compontent count', val);
        //          this.count = val;
        //      });
        //  }
     }
 };
 </script>