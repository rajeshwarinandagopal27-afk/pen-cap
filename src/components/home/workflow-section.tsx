import { SectionHeading } from "@/components/common/section-heading";
import { WorkflowDiagram } from "@/components/common/workflow-diagram";

export function WorkflowSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="Procurement Workflow"
        title="From RFQ to your dock — eight steps, one accountable partner."
        description="Every request moves through the same disciplined process, whether it's a single part number or a full BOM."
      />
      <div className="mt-12">
        <WorkflowDiagram />
      </div>
    </section>
  );
}
