import Loading from './loading.vue'

export default function install(Vue) {
    let LoadingConstructor = Vue.extend(Loading);
    let _loading = null;
    Vue.prototype['$loading'] = {
        show() {
            if (!_loading) {
                _loading = new LoadingConstructor({
                    el: document.createElement('div')
                })
            }
            if (_loading.visable) return
            document.body.appendChild(_loading.$el);
            Vue.nextTick(() => {_loading.visable = true;});
        },
        hide() {
            if (_loading && _loading.visable) {
                _loading.visable = false;
            }
        }
    }
}