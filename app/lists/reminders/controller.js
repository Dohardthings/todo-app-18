import Ember from 'ember';

export default Ember.Controller.extend({
  saveReminder(name, done) {
    const reminder = this.store.createRecord(`reminder`, {name, done});
console.log(reminder);
    reminder.save();

  },

});
