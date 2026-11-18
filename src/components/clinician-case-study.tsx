"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

export function ClinicianCaseStudy() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const restorePage = () => {
      document.body.style.overflow = "";
    };

    dialog.addEventListener("close", restorePage);
    return () => {
      dialog.removeEventListener("close", restorePage);
      restorePage();
    };
  }, []);

  const openCaseStudy = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  };

  const closeCaseStudy = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button className="case-study-button" type="button" onClick={openCaseStudy}>
        View complete case study
        <ArrowUpRight aria-hidden="true" />
      </button>

      <dialog
        className="case-study-dialog"
        ref={dialogRef}
        aria-labelledby="clinician-case-study-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeCaseStudy();
        }}
      >
        <div className="case-study-shell">
          <header className="case-study-header">
            <a className="case-study-brand" href="#work" onClick={closeCaseStudy}>
              Ezequiel Dominguez Pace
            </a>
            <button className="case-study-close" type="button" onClick={closeCaseStudy} aria-label="Close case study">
              <X aria-hidden="true" />
            </button>
          </header>

          <article className="case-study-content">
            <div className="case-study-hero">
              <span className="eyebrow"><i /> Healthcare · HCHB · In development</span>
              <h1 id="clinician-case-study-title">Turning fragmented productivity information into an actionable daily experience.</h1>
              <p>
                A clinician-centered dashboard designed to bring visits, progress, productivity, and relevant patient insights into one coherent experience.
              </p>
            </div>

            <div className="case-study-facts" aria-label="Project summary">
              <div><span>My role</span><strong>End-to-end UX ownership</strong></div>
              <div><span>Scope</span><strong>Discovery to final UI</strong></div>
              <div><span>Primary users</span><strong>Field clinicians</strong></div>
              <div><span>Project status</span><strong>In development</strong></div>
            </div>

            <section className="case-study-section">
              <span className="case-study-number">01</span>
              <div>
                <h2>Project context</h2>
                <p>
                  HCHB’s Care+ Migration initiative is moving clinician point-of-care workflows from the legacy PointCare application into Care+, improving more than basic workflow parity. The opportunity was to create a modern, differentiated experience that helps clinicians understand and manage their work.
                </p>
                <p>
                  I identified an opportunity to consolidate existing productivity and reporting capabilities into a centralized dashboard, helping clinicians make faster decisions and access relevant information without navigating multiple areas of the application.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">02</span>
              <div>
                <h2>My role and ownership</h2>
                <p>
                  I owned the UX process from opportunity identification and discovery through concept exploration, information architecture, interaction design, and final UI. I also collaborated with practicing clinicians, product managers with clinical experience, and product stakeholders.
                </p>
                <p>
                  My initial design exploration helped shape the idea into a formal product feature within the Care+ roadmap rather than simply implementing a predefined dashboard.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">03</span>
              <div>
                <h2>Discovery and user understanding</h2>
                <p>
                  I organized focus groups with practicing clinicians and product managers with previous clinical experience. These sessions explored daily workflows, operational challenges, and the information clinicians need to prioritize and complete their work.
                </p>
                <ul className="case-study-list">
                  <li>Daily visit activity and completion</li>
                  <li>Productivity metrics and progress toward targets</li>
                  <li>Mileage and travel information</li>
                  <li>Patient-level insights</li>
                  <li>Clear visibility into daily and weekly activity</li>
                </ul>
                <p>
                  Research feedback, UX recommendations, and product requirements informed the direction of the experience. Feedback gathered during later concept presentations was used to validate and refine the proposed dashboard.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">04</span>
              <div>
                <h2>Defining the experience</h2>
                <p>
                  The main challenge was consolidating several types of information without overwhelming clinicians. I evaluated the dashboard content across three dimensions:
                </p>
                <div className="case-study-principles">
                  <div><span>01 · Daily essentials</span><h3>What users need for their daily work</h3><p>Visits, progress, productivity, and other information needed to understand and act on the day.</p></div>
                  <div><span>02 · Delight</span><h3>What makes the experience more helpful</h3><p>Information and interactions that support motivation and improve confidence beyond basic task completion.</p></div>
                  <div><span>03 · Wow</span><h3>What provides meaningful differentiation</h3><p>Capabilities that are more actionable, intuitive, or valuable than disconnected reporting in the legacy experience.</p></div>
                </div>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">05</span>
              <div>
                <h2>Key UX decision</h2>
                <p>
                  The first exploration considered presenting the dashboard as a single page. As the number of metrics and information categories grew, it became clear that displaying everything simultaneously increased cognitive load and made it harder to identify what mattered.
                </p>
                <p>
                  I moved to a tabbed information architecture, organizing related content into focused views. This preserved a comprehensive overview while giving clinicians a clearer path to their daily activity, progress, and supporting details.
                </p>
                <div className="case-study-callout">
                  <span>The design decision</span>
                  <strong>Move from showing everything at once to organizing information by purpose and relevance.</strong>
                </div>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">06</span>
              <div>
                <h2>Design considerations and trade-offs</h2>
                <p>
                  A useful dashboard also has to be understandable and trustworthy. The design considered how operational metrics could be interpreted, especially when data may be delayed or metric definitions differ across disciplines.
                </p>
                <div className="case-study-tradeoffs">
                  <div><span>More visibility</span><p>provided useful context, but too many metrics could overwhelm users.</p></div>
                  <div><span>Standardization</span><p>improved consistency, while role- and discipline-specific needs still required flexibility.</p></div>
                  <div><span>Connected workflows</span><p>reduced navigation, but patient insights and operational data needed appropriate separation.</p></div>
                  <div><span>Progress visibility</span><p>could motivate clinicians, but productivity metrics also needed to avoid feeling like performance monitoring.</p></div>
                </div>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">07</span>
              <div>
                <h2>Final solution</h2>
                <p>
                  The resulting concept brings together key productivity and operational insights in a cohesive experience. It provides visibility into daily activity, progress, and relevant details while reducing the need to navigate several disconnected reporting areas.
                </p>
                <p>
                  The interface prioritizes relevant information, organizes secondary detail into supporting views, and uses clear hierarchy to help clinicians understand their responsibilities and next actions.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">08</span>
              <div>
                <h2>Validation and stakeholder alignment</h2>
                <p>
                  I presented evolving concepts during additional clinician focus group sessions and gathered feedback on the proposed direction. I also presented the experience to product stakeholders to discuss priorities and align on the approach.
                </p>
                <p>
                  Clinician feedback was positive and reinforced the value of a centralized experience for understanding daily responsibilities and progress.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">09</span>
              <div>
                <h2>Project status and success</h2>
                <p>
                  The dashboard concept was formalized as a product feature and is currently awaiting the start of development. It is therefore not yet possible to report adoption or post-launch business impact.
                </p>
                <div className="case-study-metrics">
                  <div><span>Proposed quality indicator</span><strong>≥90% successful dashboard loads</strong></div>
                  <div><span>Proposed quality indicator</span><strong>≥95% correct role-based visibility</strong></div>
                  <div><span>Proposed outcome</span><strong>Reduced navigation effort</strong></div>
                  <div><span>Proposed outcome</span><strong>Improved confidence and engagement</strong></div>
                </div>
                <p className="case-study-disclaimer">
                  These are proposed success measures for implementation and pilot evaluation, not achieved results.
                </p>
              </div>
            </section>
          </article>
        </div>
      </dialog>
    </>
  );
}
