angular.module('formApp', [])
  .controller('FormController', function() {
    var forms = this;

    forms.formListGeneral = [
      {option: "Last Name"},
      {option: "First Name"},
      {option: "Lot Number"},
      {option: "Filing Number"},
      {option: "Lot Address"},
      {option: "Mailing Address"},
      {option: "Home Phone"},
      {option: "Cell Phone"},
      {option: "Email Address"},
      {option: "Builder Name"},
      {option: "Builder Address"},
      {option: "Builder Office Phone"},
      {option: "Builder Cell Phone"}    ];

    forms.setFormListByName = function(name) {
      name = general;
      if(name === general) {
        this.formList = [
          {option: "Last Name"},
          {option: "First Name"},
          {option: "Lot Number"},
          {option: "Filing Number"},
          {option: "Lot Address"},
          {option: "Mailing Address"},
          {option: "Home Phone"},
          {option: "Cell Phone"},
          {option: "Email Address"},
          {option: "Builder Name"},
          {option: "Builder Address"},
          {option: "Builder Office Phone"},
          {option: "Builder Cell Phone"}
        ];
      }
    }
  });
