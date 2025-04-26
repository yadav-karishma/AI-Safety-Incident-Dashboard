

import React, { useState } from "react";
import { Incident } from "../types/Incident";

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="incident-item">
      <div className="incident-summary">
        <strong>{incident.title}</strong> | Severity: {incident.severity} | Date: {new Date(incident.reported_at).toLocaleDateString()}
        <button onClick={() => setShowDetails(prev => !prev)}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
      {showDetails && <div className="incident-description">{incident.description}</div>}
    </div>
  );
};

export default IncidentItem;
