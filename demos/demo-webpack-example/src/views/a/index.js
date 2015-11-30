module.exports = {
  template: require('./template.html'),
  replace: true,
  data:{
      msg: 'This is page A.',
      leftName: 'Bruce Lee',
      rightName: 'Chuck Norris'
  },
  components: {
    'app-header': require('../../components/header'),
    'app-pane': require('../../components/pane')
  }
}