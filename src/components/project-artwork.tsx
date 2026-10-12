import { Activity, CircleCheck, Sparkles } from "lucide-react";

type ProjectVisual = "dashboard" | "chart" | "care" | "marketplace" | "fintech" | "system" | "chat" | "fashion";

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
      {visual === "chat" && (
        <div className="chat-window">
          <div className="chat-header">
            <span className="chat-avatar" />
            <div><b /><i /></div>
            <em />
          </div>
          <div className="chat-body">
            <div className="chat-bubble chat-bubble-inbound"><span /><i /><i /></div>
            <div className="chat-bubble chat-bubble-outbound"><span /><i /></div>
            <div className="chat-bubble chat-bubble-inbound"><span /><i /><i /></div>
          </div>
          <div className="chat-input"><span /><span /><span /></div>
        </div>
      )}
      {visual === "marketplace" && (
        <div className="market-grid">
          <div className="market-top"><span /><span /><i /></div>
          <div className="market-banner"><b /><i /></div>
          <div className="market-products"><i /><i /><i /></div>
        </div>
      )}
      {visual === "fashion" && (
        <div className="fashion-window">
          <div className="fashion-top"><span /><span /><span /></div>
          <div className="fashion-nav"><b /> <i /> <i /></div>
          <div className="fashion-hero">
            <div className="fashion-hero-copy">
              <div>
                <span className="fashion-tag">New arrival</span>
                <strong>Minimal leather</strong>
              </div>
              <button>Shop</button>
            </div>
            <div className="fashion-shoe" />
          </div>
          <div className="fashion-row">
            <div className="fashion-item">
              <div className="fashion-product fashion-product-one" />
              <small /><em />
            </div>
            <div className="fashion-item fashion-item-alt">
              <div className="fashion-product fashion-product-two" />
              <small /><em />
            </div>
            <div className="fashion-item">
              <div className="fashion-product fashion-product-three" />
              <small /><em />
            </div>
          </div>
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