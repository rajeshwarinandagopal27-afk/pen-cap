"use client";

import * as React from "react";

import { StepShell } from "@/components/admissions/step-shell";
import { StepFooter } from "@/components/admissions/step-footer";
import { cn } from "@/lib/utils";

interface Question {
  prompt: string;
  options: string[];
  correctIndex: number;
}

const beginnerQuestions: Question[] = [
  {
    prompt: "Which of these best describes a firewall's primary job?",
    options: [
      "Encrypting files stored on disk",
      "Controlling traffic in and out of a network based on rules",
      "Detecting malware signatures in email attachments",
    ],
    correctIndex: 1,
  },
  {
    prompt: "In the phrase \"phishing email,\" what is the attacker primarily trying to do?",
    options: [
      "Overload a server with traffic",
      "Trick a person into giving up credentials or clicking a malicious link",
      "Physically access a data center",
    ],
    correctIndex: 1,
  },
  {
    prompt: "What does \"CIA triad\" stand for in security fundamentals?",
    options: [
      "Confidentiality, Integrity, Availability",
      "Cyber, Intelligence, Access",
      "Control, Inspection, Audit",
    ],
    correctIndex: 0,
  },
];

const experiencedQuestions: Question[] = [
  {
    prompt: "An API returns another user's private data when you change an ID in the URL. What is this vulnerability class?",
    options: ["Cross-site scripting (XSS)", "Insecure Direct Object Reference (IDOR)", "DNS cache poisoning"],
    correctIndex: 1,
  },
  {
    prompt: "Which technique is most associated with Active Directory privilege escalation?",
    options: ["Kerberoasting", "ARP spoofing", "Buffer overflow"],
    correctIndex: 0,
  },
  {
    prompt: "In a penetration test report, what does a CVSS score primarily communicate?",
    options: ["Time taken to exploit", "Severity of a vulnerability", "Number of affected users"],
    correctIndex: 1,
  },
];

function AssessmentStep({
  experienced,
  onNext,
  onBack,
}: {
  experienced: boolean;
  onNext: (score: number, total: number) => void;
  onBack: () => void;
}) {
  const questions = experienced ? experiencedQuestions : beginnerQuestions;
  const [answers, setAnswers] = React.useState<(number | null)[]>(questions.map(() => null));
  const allAnswered = answers.every((a) => a !== null);

  function handleSubmit() {
    const score = answers.reduce<number>((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
    onNext(score, questions.length);
  }

  return (
    <StepShell
      eyebrow="Step 4 of 5 · Skills baseline"
      title={experienced ? "A short technical baseline." : "A short logic & aptitude check."}
      description={
        experienced
          ? "Three quick questions calibrated to your background — this isn't pass/fail, it just helps faculty place you correctly."
          : "No prior knowledge assumed — this just helps faculty calibrate week one to you."
      }
    >
      <div className="flex flex-col gap-8">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="type-body-lg font-medium text-[var(--color-text-primary)]">
              {qi + 1}. {q.prompt}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  type="button"
                  onClick={() =>
                    setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))
                  }
                  className={cn(
                    "rounded-[var(--radius-md)] border p-3.5 text-left type-body-sm transition-colors",
                    answers[qi] === oi
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-fill)] text-[var(--color-text-primary)]"
                      : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]",
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <StepFooter
        onBack={onBack}
        continueType="button"
        onContinue={handleSubmit}
        disabled={!allAnswered}
        continueLabel="Submit assessment"
      />
    </StepShell>
  );
}

export { AssessmentStep };
