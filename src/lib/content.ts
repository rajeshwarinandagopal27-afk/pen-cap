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
  Rocket,
  Boxes,
  ShieldCheck,
  Globe2,
  Gauge,
  Wrench,
  BadgeCheck,
  Package,
  type LucideIcon,
} from "lucide-react";

export type ProductCategory = {
  name: string;
  slug: string;
  icon: LucideIcon;
  blurb: string;
  examples: string[];
};

export const productCategories: ProductCategory[] = [
  {
    name: "Integrated Circuits",
    slug: "integrated-circuits",
    icon: Cpu,
    blurb: "Logic, interface, memory and analog ICs sourced from authorized lines.",
    examples: ["Logic & Interface", "Memory", "Amplifiers", "Data Converters"],
  },
  {
    name: "Microcontrollers",
    slug: "microcontrollers",
    icon: Microchip,
    blurb: "8/16/32-bit MCUs and MPUs — from prototyping to production volumes.",
    examples: ["Arm Cortex-M", "RISC-V", "DSPs", "Wireless MCUs"],
  },
  {
    name: "Power ICs",
    slug: "power-ics",
    icon: Zap,
    blurb: "Regulators, controllers and management ICs for efficient designs.",
    examples: ["DC-DC", "LDOs", "Gate Drivers", "PMICs"],
  },
  {
    name: "Semiconductors",
    slug: "semiconductors",
    icon: CircuitBoard,
    blurb: "Discretes and power devices across silicon, SiC and GaN.",
    examples: ["MOSFETs", "IGBTs", "Diodes", "SiC / GaN"],
  },
  {
    name: "Sensors",
    slug: "sensors",
    icon: Radar,
    blurb: "Precision sensing for motion, environment, current and position.",
    examples: ["IMU", "Temperature", "Pressure", "Current"],
  },
  {
    name: "Connectors",
    slug: "connectors",
    icon: Cable,
    blurb: "Board-to-board, wire-to-board and industrial interconnect systems.",
    examples: ["Board-to-Board", "RF", "Industrial", "Circular"],
  },
  {
    name: "Passive Components",
    slug: "passive-components",
    icon: Layers,
    blurb: "Resistors, capacitors, inductors and crystals across every package.",
    examples: ["MLCCs", "Resistors", "Inductors", "Crystals"],
  },
  {
    name: "Relays",
    slug: "relays",
    icon: ToggleRight,
    blurb: "Signal, power and solid-state relays for switching and isolation.",
    examples: ["Signal", "Power", "Solid-State", "Automotive"],
  },
  {
    name: "Industrial Electronics",
    slug: "industrial-electronics",
    icon: Factory,
    blurb: "Modules, power supplies and rugged parts for the factory floor.",
    examples: ["Power Supplies", "Modules", "Fuses", "Protection"],
  },
];

export type Industry = {
  name: string;
  slug: string;
  icon: LucideIcon;
  blurb: string;
};

export const industries: Industry[] = [
  { name: "Robotics", slug: "robotics", icon: Bot, blurb: "Motion, sensing and compute for autonomous systems." },
  { name: "EV & Mobility", slug: "ev-mobility", icon: CarFront, blurb: "Power electronics and BMS parts for electrified drivetrains." },
  { name: "IoT & Connectivity", slug: "iot", icon: Wifi, blurb: "Low-power MCUs, wireless and sensors at scale." },
  { name: "Industrial Automation", slug: "industrial-automation", icon: Cog, blurb: "Rugged control, I/O and protection components." },
  { name: "Medical Devices", slug: "medical", icon: HeartPulse, blurb: "Traceable, compliant parts for regulated designs." },
  { name: "Aerospace & Defence", slug: "aerospace-defence", icon: Rocket, blurb: "High-reliability sourcing with full provenance." },
  { name: "Consumer Electronics", slug: "consumer", icon: Boxes, blurb: "Cost-optimized BOMs delivered on tight cycles." },
  { name: "EMS & Manufacturing", slug: "ems", icon: Package, blurb: "Line-side supply and kitting for contract manufacturers." },
];

export type ValueProp = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChoose: ValueProp[] = [
  {
    title: "Authentic & Traceable",
    description:
      "Every part sourced through authorized and franchise channels, with full provenance and anti-counterfeit checks.",
    icon: ShieldCheck,
  },
  {
    title: "Global Sourcing Network",
    description:
      "Access to 3,000+ manufacturers and a worldwide supplier base — consolidated into one accountable partner.",
    icon: Globe2,
  },
  {
    title: "Speed & Lead-Time",
    description:
      "Fast, precise quotes and proactive lead-time management that treats your production schedule as a promise.",
    icon: Gauge,
  },
  {
    title: "Engineering Support",
    description:
      "Sourcing engineers who read datasheets — cross-references, alternates and lifecycle guidance included.",
    icon: Wrench,
  },
  {
    title: "Quality Assurance",
    description:
      "Incoming inspection, documentation and testing options aligned to ISO-grade quality processes.",
    icon: BadgeCheck,
  },
  {
    title: "Built for Scale",
    description:
      "From prototype quantities to production forecasts, scheduled orders and line-side kitting.",
    icon: Boxes,
  },
];

/** Brands and lines a franchise distributor sources. Rendered as text wordmarks. */
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
  "Diodes Inc.",
  "Würth Elektronik",
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "3,000+", label: "Manufacturers sourced" },
  { value: "500K+", label: "Line items quotable" },
  { value: "< 48 hr", label: "Average RFQ turnaround" },
  { value: "99.7%", label: "On-time delivery target" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Placeholder testimonials — anonymized roles, not real endorsements. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "SLT turned a six-week shortage into a two-day fix. The quote was precise, the parts were genuine, and the line never stopped.",
    name: "Procurement Lead",
    role: "Robotics OEM · Bengaluru",
  },
  {
    quote:
      "Their sourcing engineers actually understand our BOM. Cross-references and lifecycle flags saved us a redesign.",
    name: "Hardware Engineering Manager",
    role: "EV Powertrain Startup · Pune",
  },
  {
    quote:
      "Traceability documentation on every shipment made our medical-device audit painless. This is how sourcing should work.",
    name: "Supply Chain Director",
    role: "Medical Devices · Chennai",
  },
];

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    title: "Spot Buys & Shortage Recovery",
    description: "Urgent sourcing for allocated, obsolete or hard-to-find parts — quoted fast, verified genuine.",
    icon: Zap,
  },
  {
    title: "BOM Sourcing & Consolidation",
    description: "Upload a full bill of materials and receive one consolidated, line-item quote from a single partner.",
    icon: Layers,
  },
  {
    title: "Scheduled & Forecast Orders",
    description: "Production forecasts, scheduled releases and buffer stock aligned to your build plan.",
    icon: Gauge,
  },
  {
    title: "Line-Side Kitting for EMS",
    description: "Kitted, labelled and sequenced deliveries that drop straight onto the assembly line.",
    icon: Package,
  },
];
