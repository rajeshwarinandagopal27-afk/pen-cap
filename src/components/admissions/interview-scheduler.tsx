"use client";

import * as React from "react";
import { toast } from "sonner";
import { CalendarCheck2, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIME_SLOTS = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

function nextBusinessDays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export function InterviewScheduler() {
  const days = React.useMemo(() => nextBusinessDays(5), []);
  const [selectedDay, setSelectedDay] = React.useState(0);
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);
  const [confirmed, setConfirmed] = React.useState(false);

  if (confirmed) {
    const day = days[selectedDay];
    return (
      <div className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-risk-success/30 bg-risk-success/10 p-6 text-center">
        <Check className="size-6 text-risk-success" aria-hidden="true" />
        <p className="font-medium text-text-primary">
          Interview scheduled for {day.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at{" "}
          {selectedSlot}
        </p>
        <p className="text-sm text-text-secondary">A calendar invite and prep guide are on their way to your email.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-medium text-text-primary">
        <CalendarCheck2 className="size-4 text-accent" aria-hidden="true" /> Pick an interview time
      </p>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {days.map((day, index) => (
          <button
            key={day.toISOString()}
            type="button"
            onClick={() => {
              setSelectedDay(index);
              setSelectedSlot(null);
            }}
            className={cn(
              "flex shrink-0 flex-col items-center rounded-[var(--radius-sm)] border px-3.5 py-2 text-xs transition-colors",
              index === selectedDay
                ? "border-accent bg-accent-fill text-accent"
                : "border-border text-text-secondary hover:border-accent/40"
            )}
          >
            <span className="font-medium">{day.toLocaleDateString(undefined, { weekday: "short" })}</span>
            <span>{day.toLocaleDateString(undefined, { month: "short", day: "numeric" })}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {TIME_SLOTS.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => setSelectedSlot(slot)}
            className={cn(
              "rounded-[var(--radius-sm)] border px-3 py-2 text-sm font-medium transition-colors",
              selectedSlot === slot
                ? "border-accent bg-accent-fill text-accent"
                : "border-border text-text-secondary hover:border-accent/40"
            )}
          >
            {slot}
          </button>
        ))}
      </div>
      <Button
        type="button"
        size="lg"
        className="mt-6 w-full"
        disabled={!selectedSlot}
        onClick={() => {
          setConfirmed(true);
          toast.success("Interview scheduled — check your email for a calendar invite.");
        }}
      >
        Confirm interview
      </Button>
    </div>
  );
}
