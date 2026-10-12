"use client";

import { useState } from "react";
import { ArrowLeft, MessageCircle, Send, X } from "lucide-react";
import { faqs } from "@/data/portfolio";

export function FaqWidget() {
  const [open, setOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="faq-widget">
      {open && (
        <section className="faq-panel" role="dialog" aria-label="Recruiter questions">
          <div className="faq-header">
            <div className="faq-avatar">EDP</div>
            <div><strong>A quick introduction</strong><span>Questions recruiters often ask</span></div>
            <button className="faq-close" type="button" onClick={() => setOpen(false)} aria-label="Close questions">
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="faq-body" aria-live="polite">
            {selectedQuestion === null ? (
              <>
                <p className="faq-prompt">What would you like to know?</p>
                <div className="faq-questions">
                  {faqs.map((faq, index) => (
                    <button key={faq.question} type="button" onClick={() => setSelectedQuestion(index)}>
                      {faq.question}<Send aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="faq-answer-wrap">
                <button className="faq-back" type="button" onClick={() => setSelectedQuestion(null)}>
                  <ArrowLeft aria-hidden="true" /> All questions
                </button>
                <p className="faq-question-bubble">{faqs[selectedQuestion].question}</p>
                <p className="faq-answer">{faqs[selectedQuestion].answer}</p>
                <button className="faq-another" type="button" onClick={() => setSelectedQuestion(null)}>
                  Ask another question
                </button>
              </div>
            )}
          </div>
          <div className="faq-footnote">Answers based on the information shared on this portfolio.</div>
        </section>
      )}
      <button
        className="faq-launcher"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close recruiter questions" : "Open recruiter questions"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <><MessageCircle aria-hidden="true" /><span>Ask me anything</span></>}
      </button>
    </div>
  );
}