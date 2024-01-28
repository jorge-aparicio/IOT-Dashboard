
import { Meteor } from 'meteor/meteor';
import { SensorsCollection } from '/imports/api/SensorsCollection';


Meteor.startup(() => {
  

  SensorsCollection.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    }
  });
 
});
