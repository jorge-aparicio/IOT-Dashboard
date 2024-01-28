import React from 'react';
import { Layout } from '../components/Layout';
import SensorsTable from '../components/SensorTable';
import { SensorsCollection } from '/imports/api/SensorsCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { Sensor } from '/imports/models/Sensor';

export const Dashboard = () => {
  const sensorData = useTracker(() => SensorsCollection.find({}).fetch()).reverse();
  console.log(sensorData)
  return (
    
  <Layout>
    <div style={{marginLeft: "150px", padding: "20px" }}>
        <h1 className="page-header">Dashboard</h1>
        <SensorsTable sensors={sensorData as Sensor[]}/>
    </div>
  </Layout>
  );
};