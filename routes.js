'use strict';

module.exports = function(app) {
  /*
   * set default routes
   */
	app.get('/', function(req, res, next) {
  	res.redirect('/module-x');
  });

  try {
  	app.use('/module-x', require('module-x'));
  } catch(e) {
    console.log('module-x not found');
  }
  try {
  	app.use('/module-y', require('module-y'));
  } catch(e) {
    console.log('module-y not found');
  }
  try {
  	app.use('/module-z', require('module-z'));
  } catch(e) {
    console.log('module-z not found');
  }
}