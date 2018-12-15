module.exports = {
  friendlyName: 'Create Vacation',
  inputs: {
    location: {type: 'string', required: false},
    transporation_method: {type: 'string', required: false},
    transportation_cost:  {type: 'number', required: false},
    lodging_type:         {type: 'string', required: false},
    lodging_cost:         {type: 'number', required: false},
    total_cost:           {type: 'number', required: false}
  },
  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'vacation/new'
    }
  },

  fn: async function(inputs, exits) {
      var vacation = await Vacation.create(inputs).exec(console.log);
      // console.log(inputs)
      return exits.success({});
    // return true;

  }
}
