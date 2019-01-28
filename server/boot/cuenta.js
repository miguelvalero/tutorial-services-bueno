'use strict';
module.exports = function(app) {
  delete app.models.Cuenta.validations.email;
};
