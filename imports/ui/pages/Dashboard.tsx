import React from "react";
import { Layout } from "../components/Layout";
import SensorsTable from "../components/SensorTable";
import { SensorsCollection } from "/imports/api/SensorsCollection";
import { useTracker } from "meteor/react-meteor-data";
import { Sensor } from "/imports/models/Sensor";
import { Navigate } from "react-router-dom";

interface DashboardProps {
  isAuthenticated: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ isAuthenticated }) => {
  const sensorData = useTracker(() =>
    SensorsCollection.find({}).fetch()
  ).reverse();
  console.log(sensorData);
  return isAuthenticated ? (
    <Layout isAuthenticated={isAuthenticated} isHome={false}>
      <div>
        <h1 className="page-header">Dashboard</h1>
        <SensorsTable sensors={sensorData as Sensor[]} />
      </div>
    </Layout>
  ) : (
    <Navigate to="/home" />
  );
};
