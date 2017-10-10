{"filter":false,"title":"20170719180356-EstudiantesFinal2.js","tooltip":"/migrations/20170719180356-EstudiantesFinal2.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","    /*","      Add altering commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.createTable('users', { id: Sequelize.INTEGER });","    */","  },","","  down: function (queryInterface, Sequelize) {","    /*","      Add reverting commands here.","      Return a promise to correctly handle asynchronicity.","","      Example:","      return queryInterface.dropTable('users');","    */","  }","};",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["'use strict';","","module.exports = {","  up: function (queryInterface, Sequelize) {","   ","  // MODIFICACIONES ESTUDIANTES","   ","   queryInterface.addColumn(","     'Estudiantes',","     'Correo', ","     {","      type: Sequelize.STRING,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.addColumn(","     'Estudiantes',","     'Cedula', ","     {","      type: Sequelize.INTEGER,","      unique: true,","      allowNull : false","     }","   ),","   queryInterface.addColumn(","     'Estudiantes',","     'Carnet', ","     {","      type: Sequelize.BIGINT,","      unique: true,","      allowNull : false","     }","   );","  },","","  down: function (queryInterface, Sequelize) {","    return queryInterface;","  }","};",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":40,"column":0},"end":{"row":40,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1500487447135,"hash":"2ca4121fd040cc62dd6482df7458de49ebe42103"}