import {
  Cpu,
  CircuitBoard,
  Zap,
  Microchip,
  Radar,
  Cable,
  Layers,
  ToggleRight,
  Factory,
  Bot,
  CarFront,
  Wifi,
  Cog,
  HeartPulse,
  Boxes,
  ShieldCheck,
  Globe2,
  Gauge,
  Wrench,
  BadgeCheck,
  Package,
  Lightbulb,
  Antenna,
  SunMedium,
  ShieldAlert,
  FileInput,
  ClipboardCheck,
  Truck,
  PackageCheck,
  FileText,
  Fingerprint,
  ScanEye,
  PackageSearch,
  Recycle,
  History,
  Target,
  Compass,
  Scale,
  Lock,
  Search,
  Layers3,
  Handshake,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------------------
 * Trust indicators — literal, verifiable claims about how SLT operates.
 * No statistics, certifications or customer names are asserted here.
 * ------------------------------------------------------------------- */
export const trustIndicators: string[] = [
  "B2B Focus",
  "RFQ-Based Procurement",
  "Bulk Supply",
  "Global Sourcing",
  "Technical Sales Support",
  "Quality Commitment",
];

/* ---------------------------------------------------------------------
 * Product categories — 13 groupings covering every item in the brief.
 * Category pages, not a parts catalogue: each links out to RFQ/BOM/Sales.
 * ------------------------------------------------------------------- */
export type ProductCategory = {
  name: string;
  slug: string;
  icon: LucideIcon;
  blurb: string;
  includes: string[];
  applications: string[];
  industries: string[];
  capabilities: string[];
  supplyOptions: string[];
};

export const productCategories: ProductCategory[] = [
  {
    name: "Integrated Circuits",
    slug: "integrated-circuits",
    icon: Cpu,
    blurb: "Logic, interface, analog and memory ICs sourced against exact part numbers and approved alternates.",
    includes: ["Logic & Interface ICs", "Analog & Mixed-Signal", "Memory ICs", "Data Converters"],
    applications: ["Signal processing", "Data storage & buffering", "System interfacing", "Analog front-ends"],
    industries: ["Industrial Automation", "Telecom", "Consumer Electronics", "Automotive"],
    capabilities: ["Cross-reference & alternate sourcing", "Datasheet-level spec matching", "Date-code & lot tracking"],
    supplyOptions: ["Prototype quantities", "Production volumes", "Scheduled release orders"],
  },
  {
    name: "Microcontrollers & Processors",
    slug: "microcontrollers-processors",
    icon: Microchip,
    blurb: "MCUs, MPUs and application processors across architectures, from evaluation quantities to production runs.",
    includes: ["8/16/32-bit MCUs", "Arm & RISC-V", "Application Processors", "DSPs"],
    applications: ["Embedded control", "Edge compute", "Motor & motion control", "Connected devices"],
    industries: ["Robotics", "IoT", "Industrial Automation", "EV"],
    capabilities: ["Lifecycle & EOL monitoring", "Alternate architecture guidance", "Firmware-aware sourcing support"],
    supplyOptions: ["Design-stage samples", "Pilot-run quantities", "Production forecasts"],
  },
  {
    name: "Power ICs & Voltage Regulators",
    slug: "power-ics-voltage-regulators",
    icon: Zap,
    blurb: "Regulation, conversion and power-management ICs engineered for efficiency and thermal margin.",
    includes: ["DC-DC Converters", "LDOs", "PMICs", "Gate Drivers"],
    applications: ["Power supply design", "Battery management", "Motor drive circuits", "Point-of-load regulation"],
    industries: ["EV", "Renewable Energy", "Industrial Automation", "Telecom"],
    capabilities: ["Thermal & efficiency-matched alternates", "Multi-supplier price benchmarking", "Long lead-time tracking"],
    supplyOptions: ["Prototype quantities", "Bulk procurement", "Scheduled delivery"],
  },
  {
    name: "Semiconductors — MOSFET, IGBT & Discretes",
    slug: "semiconductors-mosfet-igbt",
    icon: CircuitBoard,
    blurb: "Power semiconductors and discretes across silicon, SiC and GaN for demanding switching applications.",
    includes: ["MOSFETs", "IGBTs", "Diodes & Rectifiers", "SiC / GaN Devices"],
    applications: ["Power switching", "Motor drives", "Inverters & converters", "Protection circuits"],
    industries: ["EV", "Industrial Automation", "Renewable Energy", "Automotive"],
    capabilities: ["Package & thermal cross-reference", "High-reliability sourcing", "Counterfeit-risk screening"],
    supplyOptions: ["Bulk procurement", "Long lead-time tracking", "Alternative part sourcing"],
  },
  {
    name: "Sensors",
    slug: "sensors",
    icon: Radar,
    blurb: "Precision sensing components for motion, environment, current and position across duty cycles.",
    includes: ["IMU & Motion", "Temperature & Humidity", "Pressure", "Current & Position"],
    applications: ["Condition monitoring", "Motion & orientation sensing", "Environmental compliance", "Safety interlocks"],
    industries: ["Robotics", "Medical", "Industrial Automation", "IoT"],
    capabilities: ["Application-matched selection support", "Accuracy & tolerance cross-reference", "Calibration-aware sourcing"],
    supplyOptions: ["Sample quantities", "Production volumes", "Scheduled release orders"],
  },
  {
    name: "Connectors",
    slug: "connectors",
    icon: Cable,
    blurb: "Board-to-board, wire-to-board and industrial interconnect systems built for reliable, repeated mating.",
    includes: ["Board-to-Board", "Wire-to-Board", "RF Connectors", "Industrial & Circular"],
    applications: ["Interboard signal routing", "Field-serviceable connections", "RF & high-speed links", "Ruggedized interconnect"],
    industries: ["Telecom", "Defense", "Industrial Automation", "Automotive"],
    capabilities: ["Mating-cycle & environmental cross-reference", "Pin-count & pitch matching", "Alternate footprint guidance"],
    supplyOptions: ["Bulk procurement", "Kitted delivery", "Production forecasts"],
  },
  {
    name: "Passive Components",
    slug: "passive-components",
    icon: Layers,
    blurb: "Capacitors, resistors and inductors across every package and tolerance class.",
    includes: ["MLCCs & Electrolytics", "Resistor Networks", "Inductors & Chokes", "Crystals & Oscillators"],
    applications: ["Filtering & decoupling", "Timing & clock generation", "Energy storage", "Signal conditioning"],
    industries: ["Consumer Electronics", "Telecom", "Automotive", "Industrial Automation"],
    capabilities: ["Tolerance & dielectric cross-reference", "High-volume price benchmarking", "Reel & cut-tape supply"],
    supplyOptions: ["Bulk procurement", "Production volumes", "Scheduled delivery"],
  },
  {
    name: "Relays & Switches",
    slug: "relays-switches",
    icon: ToggleRight,
    blurb: "Signal, power and solid-state relays alongside industrial switching for control and isolation.",
    includes: ["Signal Relays", "Power Relays", "Solid-State Relays", "Industrial Switches"],
    applications: ["Load switching", "Circuit isolation", "Control panel interfaces", "Safety switching"],
    industries: ["Industrial Automation", "Automotive", "Renewable Energy", "Defense"],
    capabilities: ["Contact-rating cross-reference", "Coil-voltage alternate matching", "Certification-aware selection support"],
    supplyOptions: ["Bulk procurement", "Kitted delivery", "Scheduled release orders"],
  },
  {
    name: "LED Components",
    slug: "led-components",
    icon: Lightbulb,
    blurb: "Indication, illumination and display LEDs matched on binning, colour temperature and drive current.",
    includes: ["Indicator LEDs", "High-Power LEDs", "Addressable LEDs", "Display Modules"],
    applications: ["Status indication", "Illumination", "Signage & display", "Backlighting"],
    industries: ["Consumer Electronics", "Industrial Automation", "Automotive", "Telecom"],
    capabilities: ["Binning & CCT cross-reference", "Drive-current matched alternates", "Bulk reel supply"],
    supplyOptions: ["Bulk procurement", "Production volumes", "Sample quantities"],
  },
  {
    name: "Development Boards",
    slug: "development-boards",
    icon: Layers3,
    blurb: "Evaluation and development platforms for design validation ahead of production sourcing.",
    includes: ["MCU Evaluation Kits", "SoM & Carrier Boards", "Sensor Dev Kits", "Reference Designs"],
    applications: ["Design validation", "Firmware development", "Proof of concept", "Pre-production testing"],
    industries: ["Robotics", "IoT", "Research Laboratories", "Embedded Product Development"],
    capabilities: ["Architecture-matched recommendations", "Small-quantity fulfilment", "Transition support to production parts"],
    supplyOptions: ["Sample quantities", "Prototype quantities", "Repeat evaluation orders"],
  },
  {
    name: "Industrial Electronics",
    slug: "industrial-electronics",
    icon: Factory,
    blurb: "Modules, protection devices and rugged components engineered for the factory floor.",
    includes: ["Power Supply Modules", "Fuses & Protection", "Terminal Blocks", "Din-Rail Components"],
    applications: ["Control panel builds", "Machine protection", "Power distribution", "Field wiring"],
    industries: ["Industrial Automation", "Renewable Energy", "Defense", "Automotive"],
    capabilities: ["Rating & derating cross-reference", "Panel-build kitting", "Certification-aware selection support"],
    supplyOptions: ["Bulk procurement", "Kitted delivery", "Scheduled release orders"],
  },
  {
    name: "Hard-to-Find & Long Lead-Time Components",
    slug: "hard-to-find-long-lead-time",
    icon: Search,
    blurb: "Allocated, constrained and difficult-to-locate parts sourced through our worldwide supplier network.",
    includes: ["Allocated Components", "Long Lead-Time Parts", "Constrained Semiconductors", "Single-Source Items"],
    applications: ["Shortage recovery", "Production-line continuity", "Redesign avoidance", "Emergency procurement"],
    industries: ["EMS", "OEM Manufacturing", "Automotive", "Industrial Automation"],
    capabilities: ["Global network search", "Authenticity verification", "Priority engineering review"],
    supplyOptions: ["Spot-buy fulfilment", "Expedited sourcing", "Bridge-supply arrangements"],
  },
  {
    name: "Obsolete Component Sourcing",
    slug: "obsolete-component-sourcing",
    icon: Recycle,
    blurb: "End-of-life and discontinued parts located through specialist channels, verified before dispatch.",
    includes: ["End-of-Life Parts", "Discontinued ICs", "Legacy Components", "Last-Time-Buy Support"],
    applications: ["Legacy product support", "Field maintenance", "Long-lifecycle programmes", "Redesign bridging"],
    industries: ["Defense", "Medical", "Industrial Automation", "Telecom"],
    capabilities: ["Specialist channel sourcing", "Authenticity & condition verification", "Alternate-part engineering guidance"],
    supplyOptions: ["Spot-buy fulfilment", "Last-time-buy coordination", "Verified stock sourcing"],
  },
];

/* ---------------------------------------------------------------------
 * Industries — exactly the ten named in the brief.
 * ------------------------------------------------------------------- */
export type Industry = {
  name: string;
  slug: string;
  icon: LucideIcon;
  blurb: string;
  componentFocus: string[];
};

export const industries: Industry[] = [
  {
    name: "Industrial Automation",
    slug: "industrial-automation",
    icon: Cog,
    blurb: "Control, sensing and protection components built for continuous-duty factory environments.",
    componentFocus: ["Relays & Switches", "Sensors", "Industrial Electronics", "Connectors"],
  },
  {
    name: "Automotive",
    slug: "automotive",
    icon: CarFront,
    blurb: "Components sourced with the traceability and durability that vehicle-grade programmes require.",
    componentFocus: ["Power ICs", "Semiconductors", "Connectors", "Passive Components"],
  },
  {
    name: "Medical",
    slug: "medical",
    icon: HeartPulse,
    blurb: "Traceable sourcing for designs where component provenance is part of the compliance record.",
    componentFocus: ["Sensors", "Integrated Circuits", "Passive Components", "Connectors"],
  },
  {
    name: "Telecom",
    slug: "telecom",
    icon: Antenna,
    blurb: "RF, interconnect and power components for infrastructure and communications equipment.",
    componentFocus: ["Connectors", "Passive Components", "Power ICs", "Integrated Circuits"],
  },
  {
    name: "Consumer Electronics",
    slug: "consumer-electronics",
    icon: Boxes,
    blurb: "Cost-aware sourcing across tight product cycles without compromising on authenticity.",
    componentFocus: ["LED Components", "Microcontrollers & Processors", "Passive Components", "Sensors"],
  },
  {
    name: "Robotics",
    slug: "robotics",
    icon: Bot,
    blurb: "Motion, sensing and compute components for autonomous and semi-autonomous systems.",
    componentFocus: ["Microcontrollers & Processors", "Sensors", "Power ICs", "Development Boards"],
  },
  {
    name: "IoT",
    slug: "iot",
    icon: Wifi,
    blurb: "Low-power microcontrollers, sensors and connectivity components sourced at production scale.",
    componentFocus: ["Microcontrollers & Processors", "Sensors", "Passive Components", "Development Boards"],
  },
  {
    name: "EV",
    slug: "ev",
    icon: Zap,
    blurb: "Power electronics and battery-management components for electrified drivetrains.",
    componentFocus: ["Semiconductors — MOSFET, IGBT & Discretes", "Power ICs", "Relays & Switches", "Connectors"],
  },
  {
    name: "Renewable Energy",
    slug: "renewable-energy",
    icon: SunMedium,
    blurb: "Power conversion and protection components for generation and storage systems.",
    componentFocus: ["Semiconductors — MOSFET, IGBT & Discretes", "Power ICs", "Industrial Electronics", "Relays & Switches"],
  },
  {
    name: "Defense",
    slug: "defense",
    icon: ShieldAlert,
    blurb: "High-reliability sourcing with full provenance for programmes where verification is non-negotiable.",
    componentFocus: ["Connectors", "Industrial Electronics", "Hard-to-Find & Long Lead-Time Components", "Obsolete Component Sourcing"],
  },
];

/* ---------------------------------------------------------------------
 * Solutions / Services — consolidated from the brief's service list.
 * ------------------------------------------------------------------- */
export type Solution = {
  title: string;
  slug: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    title: "Global Component Sourcing",
    slug: "global-component-sourcing",
    description: "Sourcing run against your exact specification, across a worldwide supplier network.",
    detail:
      "Every request is worked against the datasheet, not just the part number — checking package, rating and lifecycle before a supplier is engaged.",
    icon: Globe2,
  },
  {
    title: "Bulk Procurement & Distribution",
    slug: "bulk-procurement-distribution",
    description: "Production-volume orders handled with the same scrutiny as a single sample.",
    detail:
      "Volume pricing, consolidated logistics and delivery scheduling aligned to your production calendar, not ours.",
    icon: Package,
  },
  {
    title: "BOM Fulfilment",
    slug: "bom-fulfilment",
    description: "A complete bill of materials, quoted as one consolidated order from one accountable partner.",
    detail:
      "Upload a BOM and receive a single line-itemised quote — availability, pricing and lead time for every part, cross-referenced where needed.",
    icon: FileText,
  },
  {
    title: "Alternative Part Sourcing",
    slug: "alternative-part-sourcing",
    description: "Engineering-matched alternates when your primary part is constrained or discontinued.",
    detail:
      "Cross-references are built on electrical and mechanical fit, not just footprint — reviewed before they reach your desk.",
    icon: Search,
  },
  {
    title: "Component Consultation",
    slug: "component-consultation",
    description: "A sourcing engineer to talk through spec, lifecycle and supply-risk decisions.",
    detail:
      "For teams weighing a design-stage component choice against long-term availability, not just unit cost.",
    icon: Handshake,
  },
  {
    title: "Supply Chain Support",
    slug: "supply-chain-support",
    description: "Ongoing visibility into lead times, allocation risk and delivery schedules.",
    detail:
      "Structured for teams that need a sourcing partner embedded in their planning cycle, not a one-off quote.",
    icon: Gauge,
  },
  {
    title: "Long Lead-Time Component Sourcing",
    slug: "long-lead-time-sourcing",
    description: "Proactive tracking and early engagement on parts with extended allocation windows.",
    detail:
      "Constrained and allocated parts are flagged early, with alternates and bridge-supply options assessed in parallel.",
    icon: Truck,
  },
  {
    title: "Obsolete Component Procurement",
    slug: "obsolete-component-procurement",
    description: "End-of-life parts located through specialist channels and verified before dispatch.",
    detail:
      "For legacy programmes where a redesign isn't an option — sourced, authenticated and documented.",
    icon: Recycle,
  },
];

/* ---------------------------------------------------------------------
 * Procurement workflow — the eight-step process, verbatim from the brief.
 * ------------------------------------------------------------------- */
export type WorkflowStep = { title: string; description: string; icon: LucideIcon };

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Submit RFQ",
    description: "Share a part list, a single line item, or a full bill of materials.",
    icon: FileInput,
  },
  {
    title: "Engineering Review",
    description: "Specifications, cross-references and lifecycle status are checked before sourcing begins.",
    icon: ScanEye,
  },
  {
    title: "Global Supplier Search",
    description: "Your requirement is worked across our worldwide supplier network.",
    icon: Globe2,
  },
  {
    title: "Competitive Quotation",
    description: "A consolidated, line-item quote with pricing and committed lead times.",
    icon: FileText,
  },
  {
    title: "Order Confirmation",
    description: "Purchase order issued and delivery schedule confirmed against your requirement.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Inspection",
    description: "Incoming verification against datasheet, packaging and authenticity checks.",
    icon: PackageSearch,
  },
  {
    title: "Secure Packaging",
    description: "ESD-safe, moisture-controlled packaging matched to the component class.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    description: "Delivered to your dock, documented and ready for the production line.",
    icon: Truck,
  },
];

/* ---------------------------------------------------------------------
 * Why procurement teams choose SLT — qualitative, no invented metrics.
 * ------------------------------------------------------------------- */
export type ValueProp = { title: string; description: string; icon: LucideIcon };

export const whyChoose: ValueProp[] = [
  {
    title: "Built for Procurement",
    description: "An RFQ-first workflow designed around how purchase and engineering teams actually buy.",
    icon: ClipboardCheck,
  },
  {
    title: "Worldwide Supplier Network",
    description: "Sourcing that extends beyond a single catalogue to a global base of supply.",
    icon: Globe2,
  },
  {
    title: "Engineering-Literate Sourcing",
    description: "Requests are reviewed against the datasheet — cross-references and alternates included.",
    icon: Wrench,
  },
  {
    title: "Authenticity Verification",
    description: "Incoming components are checked before they ship, not after a failure is reported.",
    icon: Fingerprint,
  },
  {
    title: "Built for Constrained Parts",
    description: "Long lead-time, allocated and obsolete components handled as a core capability, not an exception.",
    icon: Search,
  },
  {
    title: "Direct Technical Sales Support",
    description: "A sourcing team that responds to a spec sheet, not a support ticket queue.",
    icon: BadgeCheck,
  },
];

/* ---------------------------------------------------------------------
 * Manufacturers — real, publicly known component brands SLT sources
 * across the electronics supply chain. Display only; no authorization,
 * partnership or certification is implied or asserted.
 * ------------------------------------------------------------------- */
export const manufacturers: string[] = [
  "Texas Instruments",
  "Analog Devices",
  "STMicroelectronics",
  "Infineon",
  "NXP",
  "Microchip",
  "onsemi",
  "Renesas",
  "TE Connectivity",
  "Vishay",
  "Murata",
  "Nexperia",
  "Molex",
  "Bosch Sensortec",
  "Diodes Incorporated",
  "Würth Elektronik",
];

/* ---------------------------------------------------------------------
 * Quality — the seven pillars named in the brief.
 * ------------------------------------------------------------------- */
export type QualityPillar = { title: string; description: string; icon: LucideIcon };

export const qualityPillars: QualityPillar[] = [
  {
    title: "Authenticity",
    description:
      "Components are sourced against verifiable supply channels, with provenance checked before a part is quoted.",
    icon: Fingerprint,
  },
  {
    title: "Inspection",
    description:
      "Incoming components are visually and functionally checked against datasheet and packaging standards.",
    icon: ScanEye,
  },
  {
    title: "Supplier Qualification",
    description:
      "Sources are assessed on consistency, documentation and traceability before they enter our supply base.",
    icon: BadgeCheck,
  },
  {
    title: "Traceability",
    description:
      "Lot and date-code records are maintained so every shipment can be traced back to its source.",
    icon: History,
  },
  {
    title: "Packaging Standards",
    description:
      "Moisture-sensitive and static-sensitive components are packaged to the standard their class requires.",
    icon: PackageCheck,
  },
  {
    title: "ESD Handling",
    description:
      "Static-safe handling from receipt to dispatch, for components where a single discharge is a failure.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Logistics",
    description:
      "Shipments are tracked and packaged for transit conditions, not just for the warehouse shelf.",
    icon: Lock,
  },
];

/* ---------------------------------------------------------------------
 * About — company narrative. Philosophy and intent, not unverifiable
 * factual claims (no founding dates, headcounts or statistics asserted).
 * ------------------------------------------------------------------- */
export const aboutContent = {
  story:
    "SLT Technology was built around a specific, recurring problem: the gap between a finished electronic design and the moment its components are actually in hand. That gap is where designs stall, production lines wait, and hardware teams lose time to sourcing rather than engineering. SLT exists to close it — as a sourcing and distribution partner for OEMs, EMS providers, industrial automation companies and engineering teams who need components handled with the same rigour they apply to their own designs.",
  mission:
    "To give manufacturers and engineering teams dependable access to genuine electronic components — sourced globally, verified before dispatch, and delivered against a schedule that respects the production line waiting for them.",
  vision:
    "To operate as the sourcing partner manufacturers default to when a component is difficult to find — not because we are the only option, but because we are the most dependable one.",
  values: [
    {
      title: "Precision over volume",
      description: "A correct quote on one line item matters more than a fast quote on a hundred.",
      icon: Target,
    },
    {
      title: "Technical honesty",
      description: "If a part is constrained, discontinued or a poor fit, we say so before you commit to it.",
      icon: Compass,
    },
    {
      title: "Accountability",
      description: "One sourcing partner, one point of contact, for every line on the BOM.",
      icon: Handshake,
    },
    {
      title: "Discipline in process",
      description: "Verification and documentation are steps in the order, not optional extras.",
      icon: Scale,
    },
  ],
  leadershipPhilosophy:
    "Sourcing decisions are engineering decisions. Our approach treats every RFQ as a technical problem first and a commercial transaction second — because a wrong component costs far more than a slow quote.",
  qualityCulture:
    "Quality is enforced at the point of intake, not discovered at the point of failure. Every shipment is checked against the standard its component class requires before it leaves our custody.",
  supplyChainExcellence:
    "A resilient supply chain is built on redundancy, not luck. Where a primary source is constrained, an alternate path — a cross-referenced part, a secondary channel, a different lead time — is already being evaluated.",
  futureVision:
    "As manufacturing in India scales, the distance between design and dependable supply needs to shrink. SLT Technology is built to be part of that shift — a sourcing partner structured for the next decade of Indian manufacturing, not just the next order.",
};
