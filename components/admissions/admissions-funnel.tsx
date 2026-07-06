"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";

import { ProgressHeader } from "@/components/admissions/progress-header";
import { FunnelDirectionProvider } from "@/components/admissions/step-shell";
import { ExitIntentDialog } from "@/components/admissions/exit-intent-dialog";
import { EligibilityStep } from "@/components/admissions/steps/eligibility-step";
import { EligibilityResultStep } from "@/components/admissions/steps/eligibility-result-step";
import { AccountStep } from "@/components/admissions/steps/account-step";
import { ProfileBasicStep } from "@/components/admissions/steps/profile-basic-step";
import { ProfileBackgroundStep } from "@/components/admissions/steps/profile-background-step";
import { ProfileMotivationStep } from "@/components/admissions/steps/profile-motivation-step";
import { ProfileResumeStep } from "@/components/admissions/steps/profile-resume-step";
import { AssessmentStep } from "@/components/admissions/steps/assessment-step";
import { AssessmentResultStep } from "@/components/admissions/steps/assessment-result-step";
import { InterviewStep } from "@/components/admissions/steps/interview-step";
import { DecisionStep } from "@/components/admissions/steps/decision-step";
import { EnrollmentStep } from "@/components/admissions/steps/enrollment-step";
import { OnboardingStep } from "@/components/admissions/steps/onboarding-step";
import { getRecommendedProgram } from "@/lib/admissions/recommend-program";
import { getProgramBySlug } from "@/lib/data/programs";
import type {
  EligibilityValues,
  AccountValues,
  ProfileBasicValues,
  ProfileBackgroundValues,
  ProfileMotivationValues,
  InterviewValues,
  EnrollmentValues,
} from "@/lib/validations/admissions";

const STEP_MACRO = [0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4];
const STEP_ELIGIBILITY = 0;
const STEP_ELIGIBILITY_RESULT = 1;
const STEP_ACCOUNT = 2;
const STEP_PROFILE_BASIC = 3;
const STEP_PROFILE_BACKGROUND = 4;
const STEP_PROFILE_MOTIVATION = 5;
const STEP_PROFILE_RESUME = 6;
const STEP_ASSESSMENT = 7;
const STEP_ASSESSMENT_RESULT = 8;
const STEP_INTERVIEW = 9;
const STEP_DECISION = 10;
const STEP_ENROLLMENT = 11;
const STEP_ONBOARDING = 12;

interface FunnelState {
  eligibility?: EligibilityValues;
  account?: AccountValues;
  profileBasic?: ProfileBasicValues;
  profileBackground?: ProfileBackgroundValues;
  profileMotivation?: ProfileMotivationValues;
  resumeFileName?: string;
  assessment?: { score: number; total: number };
  interview?: InterviewValues;
  enrollment?: EnrollmentValues;
}

function AdmissionsFunnel() {
  const [step, setStep] = React.useState(STEP_ELIGIBILITY);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const [state, setState] = React.useState<FunnelState>({});

  function go(next: number, dir: 1 | -1 = 1) {
    setDirection(dir);
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const isExperienced =
    state.eligibility?.experienceLevel === "1-3-years" ||
    state.eligibility?.experienceLevel === "3-plus-years" ||
    state.profileBackground?.currentRole === "it-professional";

  const sponsored = state.eligibility?.sponsored ?? false;

  function nextAfterResume() {
    go(sponsored ? STEP_INTERVIEW : STEP_ASSESSMENT);
  }

  function backFromInterview() {
    go(sponsored ? STEP_PROFILE_RESUME : STEP_ASSESSMENT_RESULT, -1);
  }

  const recommended = state.eligibility ? getRecommendedProgram(state.eligibility) : undefined;
  const targetProgram = state.profileBasic?.targetProgram
    ? getProgramBySlug(state.profileBasic.targetProgram)
    : recommended?.program;

  const isFinal = step === STEP_ONBOARDING;

  return (
    <div className="pt-28 pb-24 lg:pt-36">
      <ExitIntentDialog enabled={!isFinal && step !== STEP_ELIGIBILITY} />

      {!isFinal && (
        <div className="container-page mb-14">
          <ProgressHeader currentMacro={STEP_MACRO[step]} />
        </div>
      )}

      <div className="container-page">
        <FunnelDirectionProvider value={direction}>
        <AnimatePresence mode="wait" initial={false}>
          {step === STEP_ELIGIBILITY && (
            <EligibilityStep
              key="eligibility"
              defaultValues={state.eligibility ?? {}}
              onNext={(values) => {
                setState((s) => ({ ...s, eligibility: values }));
                go(STEP_ELIGIBILITY_RESULT);
              }}
            />
          )}

          {step === STEP_ELIGIBILITY_RESULT && state.eligibility && (
            <EligibilityResultStep
              key="eligibility-result"
              eligibility={state.eligibility}
              onBack={() => go(STEP_ELIGIBILITY, -1)}
              onNext={() => go(STEP_ACCOUNT)}
            />
          )}

          {step === STEP_ACCOUNT && (
            <AccountStep
              key="account"
              defaultValues={state.account ?? {}}
              onBack={() => go(STEP_ELIGIBILITY_RESULT, -1)}
              onNext={(values) => {
                setState((s) => ({ ...s, account: values }));
                go(STEP_PROFILE_BASIC);
              }}
            />
          )}

          {step === STEP_PROFILE_BASIC && (
            <ProfileBasicStep
              key="profile-basic"
              defaultValues={{ targetProgram: recommended?.program.slug, ...state.profileBasic }}
              onBack={() => go(STEP_ACCOUNT, -1)}
              onNext={(values) => {
                setState((s) => ({ ...s, profileBasic: values }));
                go(STEP_PROFILE_BACKGROUND);
              }}
            />
          )}

          {step === STEP_PROFILE_BACKGROUND && (
            <ProfileBackgroundStep
              key="profile-background"
              defaultValues={state.profileBackground ?? {}}
              onBack={() => go(STEP_PROFILE_BASIC, -1)}
              onNext={(values) => {
                setState((s) => ({ ...s, profileBackground: values }));
                go(STEP_PROFILE_MOTIVATION);
              }}
            />
          )}

          {step === STEP_PROFILE_MOTIVATION && (
            <ProfileMotivationStep
              key="profile-motivation"
              defaultValues={state.profileMotivation ?? {}}
              onBack={() => go(STEP_PROFILE_BACKGROUND, -1)}
              onNext={(values) => {
                setState((s) => ({ ...s, profileMotivation: values }));
                go(STEP_PROFILE_RESUME);
              }}
            />
          )}

          {step === STEP_PROFILE_RESUME && (
            <ProfileResumeStep
              key="profile-resume"
              defaultFileName={state.resumeFileName}
              onBack={() => go(STEP_PROFILE_MOTIVATION, -1)}
              onNext={(fileName) => {
                setState((s) => ({ ...s, resumeFileName: fileName }));
                nextAfterResume();
              }}
            />
          )}

          {step === STEP_ASSESSMENT && (
            <AssessmentStep
              key="assessment"
              experienced={!!isExperienced}
              onBack={() => go(STEP_PROFILE_RESUME, -1)}
              onNext={(score, total) => {
                setState((s) => ({ ...s, assessment: { score, total } }));
                go(STEP_ASSESSMENT_RESULT);
              }}
            />
          )}

          {step === STEP_ASSESSMENT_RESULT && state.assessment && (
            <AssessmentResultStep
              key="assessment-result"
              score={state.assessment.score}
              total={state.assessment.total}
              onBack={() => go(STEP_ASSESSMENT, -1)}
              onNext={() => go(STEP_INTERVIEW)}
            />
          )}

          {step === STEP_INTERVIEW && (
            <InterviewStep
              key="interview"
              defaultValues={state.interview ?? {}}
              onBack={backFromInterview}
              onNext={(values) => {
                setState((s) => ({ ...s, interview: values }));
                go(STEP_DECISION);
              }}
            />
          )}

          {step === STEP_DECISION && targetProgram && (
            <DecisionStep
              key="decision"
              program={targetProgram}
              fullName={state.profileBasic?.fullName ?? ""}
              onNext={() => go(STEP_ENROLLMENT)}
            />
          )}

          {step === STEP_ENROLLMENT && targetProgram && (
            <EnrollmentStep
              key="enrollment"
              program={targetProgram}
              defaultValues={state.enrollment ?? {}}
              onBack={() => go(STEP_DECISION, -1)}
              onNext={(values) => {
                setState((s) => ({ ...s, enrollment: values }));
                go(STEP_ONBOARDING);
              }}
            />
          )}

          {step === STEP_ONBOARDING && targetProgram && (
            <OnboardingStep key="onboarding" program={targetProgram} fullName={state.profileBasic?.fullName ?? ""} />
          )}
        </AnimatePresence>
        </FunnelDirectionProvider>
      </div>
    </div>
  );
}

export { AdmissionsFunnel };
