export function NetworkMotif({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="absolute -left-24 -top-24 size-72 animate-blob rounded-full bg-royal-500/20 blur-3xl" />
      <div
        className="absolute -right-16 top-32 size-80 animate-blob rounded-full bg-red-500/10 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 size-64 animate-blob rounded-full bg-navy-700/20 blur-3xl"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
