"use client";

import { createContext, useContext, useMemo, useState } from "react";

const LeadCaptureContext = createContext(null);

export function LeadCaptureProvider({ children }) {
  const [hasCapturedLead, setHasCapturedLead] = useState(false);

  const value = useMemo(
    () => ({
      hasCapturedLead,
      captureLead: () => setHasCapturedLead(true),
    }),
    [hasCapturedLead]
  );

  return (
    <LeadCaptureContext.Provider value={value}>{children}</LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext);

  if (!context) {
    throw new Error("useLeadCapture must be used inside LeadCaptureProvider");
  }

  return context;
}
