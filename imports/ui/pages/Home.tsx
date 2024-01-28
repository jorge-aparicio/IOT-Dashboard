import React from "react";
import { Layout } from "../components/Layout";

interface HomeProps {
  isAuthenticated: boolean;
  username: String;
}
export const Home: React.FC<HomeProps> = ({ isAuthenticated, username }) => {
  return !isAuthenticated ? (
    <Layout isAuthenticated={isAuthenticated}>
      <div>
        <h1>Home</h1>
        <h2>
          Welcome to the IoT Home Page! Please Login to view the Dashboard
        </h2>
      </div>
    </Layout>
  ) : (
    <Layout isAuthenticated={isAuthenticated}>
      <div>
        <h1>Home</h1>
        <h2>Welcome {username} to the IoT Home Page!</h2>
      </div>
    </Layout>
  );
};
