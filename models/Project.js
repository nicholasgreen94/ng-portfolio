const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a Project Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  uri_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  preview_photo: {
    type: Array,
    required: true
  },
  photos: [
    {
      0: {
        type: String,
        required: false
      },
    },
    {
      1: {
        type: String,
        required: false
      },
    },
    {
      2: {
        type: String,
        required: false
      },
    },
    {
      3: {
        type: String,
        required: false
      },
    },
    {
      4: {
        type: String,
        required: false
      },
    },
    {
      5: {
        type: String,
        required: false
      },
    },
    {
      6: {
        type: String,
        required: false
      },
    },
    {
      7: {
        type: String,
        required: false
      },
    },
    {
      8: {
        type: String,
        required: false
      },
    },
    {
      9: {
        type: String,
        required: false
      },
    },
    {
      10: {
        type: String,
        required: false
      },
    },
    {
      11: {
        type: String,
        required: false
      },
    },
    {
      12: {
        type: String,
        required: false
      },
    }
  ],
  button_text: {
    type: String,
    required: true
  }
})

module.exports = Project = mongoose.model('project_information', ProjectSchema, 'project_information');
