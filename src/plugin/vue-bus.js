/**
 * @name:'vue-bus插件',
 * @author:'轩辕Rowboat',
 * @time: '2017-08-06',
 * @param {Vue Instance Vue实例} Vue
 */
const install = function(Vue) {
    const Bus = new Vue({
        name: 'bus',
        methods: {
            emit(event, ...args) {
                this.$emit(event, ...args);
            },
            on(event, callback) {
                this.$on(event, callback);
            },
            off(event, callback) {
                this.$off(event, callback);
            }
        }
    });
    Vue.prototype.$bus = Bus;
};
export default install;
