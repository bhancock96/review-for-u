module.exports = {
  attributes: {
    location: {type: 'string', required: true},
    transporation_method: {type: 'string', required: false},
    transportation_cost:  {type: 'number', required: false},
    lodging_type:         {type: 'string', required: false},
    lodging_cost:         {type: 'number', required: false},
    total_cost:           {type: 'number', required: false}
    // TODO: come back to UUID
    // uuid:                 {type: 'string', unique: true, required: true, primaryKey: false, index: true, uuidv4: true}
  }
}
