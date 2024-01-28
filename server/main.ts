
import { Meteor } from 'meteor/meteor';
import { SensorsCollection } from '/imports/api/SensorsCollection';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  
if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  SensorsCollection.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    }
  });
 
});
