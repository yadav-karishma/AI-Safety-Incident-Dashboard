

import React from "react";
import { Incident } from "../types/Incident";
import IncidentItem from "./IncidentItem";

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  return (
    <div className="incident-list">
      {incidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;
