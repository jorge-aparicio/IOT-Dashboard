import React from 'react';
import { Table } from 'reactstrap';
import { Sensor } from "../../models/Sensor"

interface SensorsTableProps {
  sensors: Sensor[];
}

const SensorRow: React.FC<Sensor> = ({ _id, timestamp, data }) => (
  <tr>
    <td>{_id._str}</td>
    <td>{timestamp}</td>
    <td>{new Date(timestamp).toLocaleString()}</td>
    <td>{data.temperature}</td>
    <td>{data.humidity}</td>
  </tr>
);

const SensorsTable: React.FC<SensorsTableProps> = ({ sensors }) => (
  <div className="table-responsive">
    <Table striped>
      <thead>
        <tr>
          <th>_id</th>
          <th>timestamp</th>
          <th>datetime</th>
          <th>temperature</th>
          <th>humidity</th>
        </tr>
      </thead>
      <tbody>
        {sensors.map((sensor) => (
          <SensorRow key={sensor._id._str} {...sensor} />
        ))}
      </tbody>
    </Table>
  </div>
);

export default SensorsTable;