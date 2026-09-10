import { useState, useEffect } from "react";
import { incidentService } from "../services/api";

export default function useTeacherIncidents() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    setIncidents(incidentService.getIncidents());
  }, []);

  const updateIncidentStatus = (id, newStatus) => {
    const updated = incidents.map((inc) =>
      inc.id === id ? { ...inc, estado: newStatus } : inc
    );
    setIncidents(updated);
    incidentService.saveIncidents(updated);
  };

  const resetIncidents = () => {
    const initial = incidentService.resetIncidents();
    setIncidents(initial);
  };

  return { incidents, updateIncidentStatus, resetIncidents };
}