const mongoose =  require('mongoose');

const TestUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  state: {
    type: String,
    default: null
  },
  notes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  }
});

mongoose.model('TestUser', TestUserSchema);