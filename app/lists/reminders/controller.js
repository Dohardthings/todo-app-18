import Ember from 'ember';

export default Ember.Controller.extend({
  saveReminder(attr) {
    const reminder = this.store.createRecord(`reminder`, attr);

    reminder.save();
  },

});
