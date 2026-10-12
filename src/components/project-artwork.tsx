import { Activity, CircleCheck, Sparkles } from "lucide-react";

type ProjectVisual = "dashboard" | "chart" | "care" | "marketplace" | "fintech" | "system";

export function ProjectArtwork({ visual }: { visual: ProjectVisual }) {
  return (
    <div className={`project-artwork artwork-${visual}`} aria-hidden="true">
      {visual === "dashboard" && (
        <div className="mock-window">
          <div className="mock-toolbar"><span /><span /><span /><i>Today</i></div>
          <div className="mock-dashboard">
            <div className="mock-sidebar"><b /><b /><b /><b /></div>
            <div className="mock-main">
              <div className="mock-heading"><span /><span /></div>
              <div className="mock-stats"><i /><i /><i /></div>
              <div className="mock-visit"><span /><b /><i /><strong /></div>
              <div className="mock-visit"><span /><b /><i /><strong /></div>
              <div className="mock-visit"><span /><b /><i /><strong /></div>
            </div>
          </div>
        </div>
      )}
      {visual === "chart" && (
        <div className="chart-window">
          <div className="chart-title"><span /><Activity /></div>
          <div className="chart-grid"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="chart-legend"><span /><span /><span /></div>
        </div>
      )}
      {visual === "care" && (
        <div className="care-stack">
          <div className="care-orbit orbit-one" />
          <div className="care-orbit orbit-two" />
          <div className="care-card"><Sparkles /><span /><i /><i /></div>
          <div className="care-chip"><CircleCheck /> Recommendation ready</div>
        </div>
      )}
      {visual === "marketplace" && (
        <div className="market-grid">
          <div className="market-top"><span /><span /><i /></div>
          <div className="market-banner"><b /><i /></div>
          <div className="market-products"><i /><i /><i /></div>
        </div>
      )}
      {visual === "fintech" && (
        <div className="finance-stack">
          <div className="finance-card"><span /><b /><i /><strong /></div>
          <div className="finance-flow"><span /><i /><i /><i /></div>
        </div>
      )}
      {visual === "system" && (
        <div className="system-board">
          <div className="system-top"><span /><i /><i /><i /></div>
          <div className="system-colors"><i /><i /><i /><i /><i /></div>
          <div className="system-components"><b /><b /><b /><b /></div>
          <div className="system-type"><i /><i /><i /></div>
        </div>
      )}
    </div>
  );
}