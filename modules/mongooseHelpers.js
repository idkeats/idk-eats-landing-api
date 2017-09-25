const mongoose = require('mongoose');

module.exports = {
  find: async (model, query, next) => {
    try {
      const result = await model.find(query);
      return result;
    } catch(err) {
      next(err);
    }
  },
  findOne: async (model, query, next) => {
    try {
      const result = await model.findOne(query);
      return result;
    } catch(err) {
      next(err);
    }
  },
  save: async (model, next) => {
    try {
      const result = await model.save();
      return result;
    } catch(err) {
      next(err);
    }
  }
}