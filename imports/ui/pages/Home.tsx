import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Meteor } from "meteor/meteor";

interface HomeProps {
  user: Meteor.User | null;
}
export const Home: React.FC<HomeProps> = ({ user }) => {
  const [isAuthenticated] = useState(user !== null);

  return !isAuthenticated ? (
    <Layout user={user}>
      <div>
        <h1>Home</h1>
        <h2>
          Welcome to the IoT Home Page! Please Login to view the Dashboard
        </h2>
      </div>
    </Layout>
  ) : (
    <Layout user={user}>
      <div>
        <h1>Home</h1>
        <h2>Welcome {user?.username} to the IoT Home Page!</h2>
      </div>
    </Layout>
  );
};
