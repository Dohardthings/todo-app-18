import Ember from 'ember';

export default Ember.Controller.extend({
  saveReminder(name, done, list) {
    const reminder = this.store.createRecord(`reminder`, {name, done, list});
console.log(reminder);
    reminder.save();

  },

});
