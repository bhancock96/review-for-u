module.exports = {
  friendlyName: 'New Vacation',
  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'vacation/new'
    }
  },

  fn: async function(inputs, exits) {
    return exits.success();
  }
}
