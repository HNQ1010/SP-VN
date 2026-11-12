import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600.css";
import "./style.css";

document.documentElement.classList.add("js");

const stageContent = {
  source: {
    label: "01 · SUPPLIER FOUNDATION",
    title: "One trusted supplier record.",
    copy: "Qualification, category, contacts, commercial terms, documents, risk, capacity, and performance history in one maintainable structure.",
  },
  decide: {
    label: "02 · SOURCING DECISION",
    title: "Comparable quotations, documented decisions.",
    copy: "Standard RFQs and evaluation criteria make price, lead time, MOQ, quality, terms, and operational impact visible before approval.",
  },
  control: {
    label: "03 · PURCHASE CONTROL",
    title: "Every request and PO has an owner.",
    copy: "Approval status, due dates, changes, open actions, and supplier follow-up stay visible from request through confirmed order.",
  },
  receive: {
    label: "04 · DELIVERY REALITY",
    title: "Connect the PO to the warehouse floor.",
    copy: "Planned delivery, receiving capacity, actual quantity, quality exceptions, and reconciliation become one controlled operating loop.",
  },
  improve: {
    label: "05 · PERFORMANCE LOOP",
    title: "Use evidence to improve supplier performance.",
    copy: "A management view tracks lead time, on-time delivery, quality, completeness, responsiveness, cost movement, and unresolved risks.",
  },
};

const stageButtons = [...document.querySelectorAll("[data-stage]")];
const stageLabel = document.querySelector("[data-stage-label]");
const stageTitle = document.querySelector("[data-stage-title]");
const stageCopy = document.querySelector("[data-stage-copy]");

function selectStage(stage) {
  const content = stageContent[stage];
  if (!content) return;
  stageButtons.forEach((button) => {
    const active = button.dataset.stage === stage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  stageLabel.textContent = content.label;
  stageTitle.textContent = content.title;
  stageCopy.textContent = content.copy;
}

stageButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  button.addEventListener("click", () => selectStage(button.dataset.stage));
});

const revealItems = [...document.querySelectorAll("[data-reveal]")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const scrollMeter = document.querySelector(".scroll-meter span");
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  scrollMeter.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
