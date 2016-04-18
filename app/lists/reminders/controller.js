import Ember from 'ember';

export default Ember.Controller.extend({
  saveReminder(list, name) {
    const reminder = this.store.createRecord(`reminder`, {
      done: false,
      list,
      name,
    });

    reminder.save().then(() => {
      this.set(`name`, ``);
    });
  },
});
