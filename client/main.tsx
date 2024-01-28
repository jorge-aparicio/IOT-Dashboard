import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import { SensorsCollection } from '/imports/api/SensorsCollection';
import { Sensor } from '/imports/models/Sensor';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container!);
  root.render(<App />);
});
