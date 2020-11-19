import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */
class ResourceCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ResourceCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: { type: String, required: true },
      website: String,
      phoneNumber: String,
      image: String,
      description: { type: String, required: true },
      type: { type: String, required: true },
    }, { requiredByDefault: false }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.resourceType = `${this.type}`;
  }
}

export const Resources = new ResourceCollection();
