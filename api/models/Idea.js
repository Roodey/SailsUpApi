/**
 * Idea.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      defaultsTo: "TODO: Add your project's description.",
    },
    created: {
      type: 'string'
    },
    content: {
      collection: 'detail'
    },
    associations:{
      collection: 'detail'
    },
    validations:{
      collection:'detail'
    }


  }
};
