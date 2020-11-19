import { Meteor } from 'meteor/meteor';
import { Resources } from '../../api/resource/Resources';

// Publish documents present in the database
Meteor.publish('financial', function () {
  return Resources.collection.find({ type: 'financial' });
});
