function ContactController() {
  var vm = this;
  this.name = "a";
  this.email ="abc@example.com";
  this.phone = '123456789';

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
