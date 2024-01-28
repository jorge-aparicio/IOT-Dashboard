import { Mongo } from 'meteor/mongo';
import { Sensor } from '../models/Sensor';
import { Meteor } from 'meteor/meteor';
export const SensorsCollection: Mongo.Collection<Sensor> = new Mongo.Collection('sensors');

if (Meteor.isClient) {
Meteor.subscribe('sensorsTopic');
}

if (Meteor.isServer) {
Meteor.publish('sensorsTopic', function() {
// only publish when logged-in users request publishing
if (this.userId) {
return [SensorsCollection.find()];
}
});
}