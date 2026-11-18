"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const explorationImages = [
  {
    src: "/images/workforce-scheduling/exploration-week-map.png",
    alt: "Scheduling workspace combining a visit list, worker schedules, and a map.",
    title: "Weekly schedule with map",
  },
  {
    src: "/images/workforce-scheduling/exploration-map-capacity.png",
    alt: "Map of worker locations beside a list of workers and their daily and weekly capacity.",
    title: "Map and worker capacity",
  },
  {
    src: "/images/workforce-scheduling/exploration-calendar-map.png",
    alt: "Patient calendar and visit list paired with a map of worker locations.",
    title: "Calendar paired with map",
  },
  {
    src: "/images/workforce-scheduling/exploration-patient-calendars.png",
    alt: "Patient search results alongside several patient calendars in a multi-calendar view.",
    title: "Patient multi-calendar",
  },
  {
    src: "/images/workforce-scheduling/exploration-multiview-search.png",
    alt: "Patient search and selected results alongside a multi-view of several calendars.",
    title: "Search with calendar comparison",
  },
  {
    src: "/images/workforce-scheduling/exploration-calendar-search.png",
    alt: "Patient search results with selected patients and a compare calendars action.",
    title: "Search results and compare action",
  },
  {
    src: "/images/workforce-scheduling/exploration-six-calendars.png",
    alt: "A scheduling screen displaying multiple worker calendars side by side.",
    title: "Multiple worker calendars",
  },
] as const;

const designImages = [
  {
    src: "/images/workforce-scheduling/map-workers.png",
    alt: "Map view with clinician markers and a worker-capacity panel listing workers and their daily and weekly points.",
    title: "Compare workers in the area",
    description: "Pair clinician locations with daily and weekly capacity information.",
  },
  {
    src: "/images/workforce-scheduling/worker-list-view.png",
    alt: "List view showing visits organized into columns for different workers, with visits selected for a move.",
    title: "Manage assignments in list view",
    description: "Review visits by worker, select multiple assignments, and prepare a bulk move.",
  },
  {
    src: "/images/workforce-scheduling/geographic-coverage.png",
    alt: "Map view with visit pins and colored route or coverage areas alongside a worker-capacity panel.",
    title: "Understand geographic coverage",
    description: "Compare service areas and visit locations while keeping worker capacity in view.",
  },
  {
    src: "/images/workforce-scheduling/map-assignment.png",
    alt: "Map view with visit pins, a worker-capacity list, and a visit assignment detail card.",
    title: "Connect location to assignment",
    description: "Review nearby workers and visit details alongside geographic context.",
  },
  {
    src: "/images/workforce-scheduling/map-filters.png",
    alt: "Map view dimmed behind the open filter panel, with controls for branch, team, job code, worker, and location.",
    title: "Focus the map with filters",
    description: "Filter by branch, team, job code, worker, and location before applying the view.",
  },
  {
    src: "/images/workforce-scheduling/map-legend.png",
    alt: "Map view with a legend distinguishing RN workers, LPN workers, requested visits, and scheduled visits.",
    title: "Make map markers legible",
    description: "Use a map legend to clarify worker and visit types.",
  },
  {
    src: "/images/workforce-scheduling/map-no-workers.png",
    alt: "Map with no worker markers and an adjacent empty worker panel prompting the scheduler to apply filters.",
    title: "Keep the map useful before results",
    description: "Retain geographic orientation while prompting the scheduler to apply filters.",
  },
  {
    src: "/images/workforce-scheduling/empty-state-filtered.png",
    alt: "Workers capacity view showing empty states prompting the scheduler to select a worker or apply filters.",
    title: "Guide the filtered empty state",
    description: "Explain why no workers are shown and how to add relevant information.",
  },
] as const;

export function WorkforceSchedulingCaseStudy() {
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
        aria-labelledby="workforce-case-study-title"
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
              <span className="eyebrow"><i /> Healthcare · HCHB · 2027 roadmap</span>
              <h1 id="workforce-case-study-title">Beyond the Calendar: Rethinking Workforce Scheduling</h1>
              <p>
                Challenging a legacy multi-calendar requirement and proposing a connected map-and-list experience for understanding workforce capacity and managing visits.
              </p>
            </div>

            <div className="case-study-facts" aria-label="Project summary">
              <div><span>My role</span><strong>End-to-end UX ownership</strong></div>
              <div><span>Collaboration</span><strong>Product Owner and design team</strong></div>
              <div><span>Research</span><strong>Scheduler and clinical-manager focus groups</strong></div>
              <div><span>Status</span><strong>Accepted into 2027 roadmap</strong></div>
            </div>

            <section className="case-study-section">
              <span className="case-study-number">01</span>
              <div>
                <h2>The challenge</h2>
                <p>
                  As part of the Web Scheduling initiative, the team needed to bring legacy scheduling capabilities into a modern web experience. One requested feature was the ability to view multiple worker or patient calendars at once, replicating a familiar capability from the legacy application.
                </p>
                <p>
                  While exploring ways to show multiple calendars, I questioned whether reproducing that interface was the best way to meet schedulers’ needs. I reframed the challenge around the work they were trying to do: understand capacity, plan geographic coverage, and redistribute visits efficiently.
                </p>
                <div className="case-study-callout">
                  <span>The question</span>
                  <strong>Could schedulers manage workforce capacity and visit distribution without relying on multiple side-by-side calendars?</strong>
                </div>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">02</span>
              <div>
                <h2>Understanding scheduler workflows</h2>
                <p>
                  In focus groups with schedulers and clinical managers, I explored how they used the legacy multi-calendar functionality. Four recurring scenarios emerged:
                </p>
                <div className="case-study-principles">
                  <div><span>01 · Capacity</span><h3>Compare worker workload</h3><p>See who has room for additional visits by comparing workers’ schedules and daily workload.</p></div>
                  <div><span>02 · Coverage</span><h3>Plan geographic coverage</h3><p>Coordinate weekend and on-call assignments by considering workers’ locations and visits.</p></div>
                  <div><span>03 · Reassignment</span><h3>Respond to call-outs</h3><p>Find available workers and redistribute visits when someone cannot work.</p></div>
                </div>
                <div className="case-study-callout">
                  <span>04 · Urgent requests</span>
                  <strong>Monitor capacity throughout the day to identify workers who can accommodate emergent visits.</strong>
                </div>
                <p>
                  These scenarios shared a legacy interface but represented different scheduling jobs. Schedulers needed to understand capacity, geography, and assignments together—not simply see more calendars.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">03</span>
              <div>
                <h2>Exploring alternatives</h2>
                <p>
                  Rather than limiting the work to rearranging calendar components, I explored six interaction directions to compare how each could support workforce capacity, location, and visit management:
                </p>
                <ul className="case-study-list">
                  <li>Resource-lane timeline for comparing worker workloads</li>
                  <li>Capacity heatmap for spotting availability and overload</li>
                  <li>Map-primary view for geographic and proximity decisions</li>
                  <li>Dedicated redistribution workflow for call-outs and urgent requests</li>
                  <li>Pinned worker roster for monitoring availability</li>
                  <li>Unified calendar with a worker comparison mode</li>
                </ul>
                <p>
                  The explorations helped evaluate distinct interaction models instead of treating the original requirement as a fixed design constraint.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">04</span>
              <div>
                <h2>From passive map to scheduling tool</h2>
                <p>
                  The map-based direction offered a way to connect geographic context with scheduling decisions. The legacy application already showed worker locations on a map, but it was a passive visualization. I proposed a new functional map for Web Scheduling, connected to visits, capacity, filtering, and reassignment.
                </p>
                <p>
                  This broadened the opportunity beyond the original multi-calendar scope. Schedulers could potentially see clinicians’ overlapping service areas, find requested visits near workers’ existing routes, compare capacity before assigning a visit, and evaluate geographic coverage.
                </p>
                <p>
                  I proposed a map and list within the Dashboard’s Workers Capacity tab. The map supports geographic awareness; the list supports worker-based review and assignment management.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">05</span>
              <div>
                <h2>A complementary map and list</h2>
                <div className="case-study-tradeoffs">
                  <div><span>Map · Geographic awareness</span><p>View scheduled visits and locations, with nearby worker capacity, date and worker filters, visit details, and location-based selection.</p></div>
                  <div><span>List · Assignment management</span><p>Review visits in worker-organized columns, select several visits, and move assignments through a focused workflow.</p></div>
                  <div><span>Shared context</span><p>Keep the selected date, workers, filters, and capacity information when switching between views.</p></div>
                  <div><span>Flexible perspective</span><p>Let schedulers choose the view that fits their task without rebuilding their selections or starting over.</p></div>
                </div>
                <div className="case-study-gallery-heading">
                  <span>Design explorations</span>
                  <p>A collage of scheduling views considered across calendar, map, and combined workflows.</p>
                </div>
                <div className="case-study-exploration-collage" aria-label="Overlapping collage of seven scheduling design explorations">
                  {explorationImages.map((image, index) => (
                    <figure className={`exploration-card exploration-card-${index + 1}`} key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1080}
                        height={768}
                        sizes="(max-width: 700px) 100vw, 55vw"
                      />
                      <figcaption>{image.title}</figcaption>
                    </figure>
                  ))}
                </div>
                <div className="case-study-gallery-heading">
                  <span>Proposed final designs</span>
                  <p>Design explorations for the map and list experience, including key filtering, assignment, and empty states.</p>
                </div>
                <div className="case-study-gallery">
                  {designImages.map((image) => (
                    <figure className="case-study-figure" key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1080}
                        height={768}
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 760px"
                      />
                      <figcaption>
                        <strong>{image.title}</strong>
                        <span>{image.description}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">06</span>
              <div>
                <h2>Designing for operational complexity</h2>
                <p>
                  The proposed experience needed to support real scheduling operations without making reassignment difficult to control:
                </p>
                <ul className="case-study-list">
                  <li>Select multiple visits, including visits across workers</li>
                  <li>Move selected visits to another worker or use drag and drop</li>
                  <li>Confirm bulk moves before completing them</li>
                  <li>Keep worker capacity visible alongside assignment decisions</li>
                  <li>Warn when a move creates a time conflict or exceeds capacity</li>
                  <li>Support a day-at-a-time view with filters to focus the information</li>
                </ul>
                <p>
                  The map and list were designed as different strengths over shared scheduling data: spatial relationships and proximity on the map; worker organization, visit selection, and bulk reassignment in the list.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">07</span>
              <div>
                <h2>Collaboration and feedback</h2>
                <p>
                  I worked primarily with the Product Owner and design team, incorporating their feedback into the evolving exploration. I also presented the map-and-list direction in subsequent scheduler focus groups.
                </p>
                <p>
                  Schedulers broadly approved of and responded positively to the proposed approach. That feedback reflects acceptance of the direction, not usability validation of a shipped experience.
                </p>
                <p>
                  The Product Owner agreed the proposal was a better direction than directly reproducing the legacy feature and formally accepted it into the product roadmap.
                </p>
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-number">08</span>
              <div>
                <h2>Outcome and next steps</h2>
                <p>
                  The work shifted the proposal from replicating multiple calendars to rethinking how schedulers understand and manage workforce distribution in Web Scheduling.
                </p>
                <ul className="case-study-list">
                  <li>A new proposed interactive map connecting geography, visits, and worker capacity</li>
                  <li>A complementary list experience for bulk visit reassignment</li>
                  <li>Shared context between geographic and assignment-focused views</li>
                  <li>Additional scheduling opportunities beyond the original scope</li>
                  <li>Product Owner alignment and positive reception from schedulers</li>
                </ul>
                <div className="case-study-callout">
                  <span>Current status</span>
                  <strong>Accepted into the 2027 roadmap and awaiting implementation. No delivery or measured business outcomes are claimed.</strong>
                </div>
                <p className="case-study-disclaimer">
                  The broader lesson: modernizing a legacy product is not always about reproducing what exists. Understanding why people rely on a feature can reveal a better way to help them accomplish the work.
                </p>
              </div>
            </section>
          </article>
        </div>
      </dialog>
    </>
  );
}
