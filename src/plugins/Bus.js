const install = (Vue) => {
  Vue.prototype.$bus = new Vue()
}

export default install
