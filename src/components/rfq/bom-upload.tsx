"use client";

import * as React from "react";
import { FileSpreadsheet, FileText, UploadCloud, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { ACCEPTED_BOM_EXTENSIONS, MAX_BOM_SIZE_MB } from "@/lib/validations/rfq";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const iconFor = (name: string) =>
  name.toLowerCase().endsWith(".pdf") ? FileText : FileSpreadsheet;

export function BomUpload({
  value,
  onChange,
  id,
  invalid,
}: {
  value: File | null | undefined;
  onChange: (file: File | null) => void;
  id?: string;
  invalid?: boolean;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = React.useState(false);

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    onChange(file ?? null);
  };

  if (value) {
    const Icon = iconFor(value.name);
    return (
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-text-primary">{value.name}</p>
          <p className="font-mono text-xs text-text-muted">{formatBytes(value.size)}</p>
        </div>
        <button
          type="button"
          onClick={() => onChange(null)}
          aria-label="Remove file"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-accent hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragActive(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={cn(
        "cursor-pointer rounded-xl border-2 border-dashed border-border bg-surface/60 p-8 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        dragActive && "border-brand/60 bg-brand/5",
        invalid && "border-destructive/60",
      )}
    >
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept={ACCEPTED_BOM_EXTENSIONS.join(",")}
        onChange={(e) => handleFiles(e.target.files)}
        className="sr-only"
        aria-label="Upload bill of materials"
      />
      <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
        <UploadCloud className="size-6" />
      </span>
      <p className="mt-4 font-medium text-text-primary">Drag &amp; drop your bill of materials</p>
      <p className="mt-1 text-sm text-text-muted">or click to browse</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {ACCEPTED_BOM_EXTENSIONS.map((ext) => (
          <span
            key={ext}
            className="rounded-md border border-border-muted px-2 py-0.5 font-mono text-[11px] text-text-muted"
          >
            {ext}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-text-muted">Maximum file size {MAX_BOM_SIZE_MB}MB</p>
    </div>
  );
}
