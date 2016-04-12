function StaffController() {
  var vm = this;
  this.name = "b";
  this.email ="ddd@example.com";
  this.phone = '987654321';

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('StaffController', StaffController);
