

import React, { useState } from "react";
import { Incident } from "../types/Incident";
import IncidentList from "./IncidentList";
import IncidentForm from "./IncidentForm";
import Filters from "./Filters";
import Sorter from "./Sorter";

const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

const IncidentDashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filterSeverity, setFilterSeverity] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const handleAddIncident = (newIncident: Incident) => {
    setIncidents([...incidents, newIncident]);
  };

  const filteredIncidents = incidents.filter(incident => {
    if (filterSeverity === "All") return true;
    return incident.severity === filterSeverity;
  });

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="dashboard">
      <h1>AI Safety Incident Dashboard</h1>
      <div className="controls">
        <Filters filterSeverity={filterSeverity} setFilterSeverity={setFilterSeverity} />
        <Sorter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <IncidentForm addIncident={handleAddIncident} />
      <IncidentList incidents={sortedIncidents} />
    </div>
  );
};

export default IncidentDashboard;
