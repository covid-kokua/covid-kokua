import { Meteor } from 'meteor/meteor';
import { Resources } from '../../api/resource/Resources';

/* eslint-disable no-console */

function addResource(data) {
  console.log(`  Adding: ${data.name} `);
  Resources.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Resources.collection.find().count() === 0) {
  if (Meteor.settings.defaultFinancial) {
    console.log('Creating default data.');
    Meteor.settings.defaultFinancial.map(data => addResource(data));
  }
}