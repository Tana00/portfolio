"use client";

import { Workflow } from "lucide-react";
import { Icon } from "./Icon";
import type { ArchitectureData } from "@/types/portfolio";
import { IconName } from "../Icons";

export function CaseStudyArchitecture({ arch }: { arch: ArchitectureData }) {
  const order = arch.layout.type === "pipeline" ? arch.layout.order : [];

  const nodeMap = new Map(arch.nodes.map((n) => [n.id, n]));
  const edgeMap = new Map(arch.edges.map((e) => [`${e.from}->${e.to}`, e]));

  const steps = order
    .map((nodeId, idx) => {
      const node = nodeMap.get(nodeId);
      if (!node) return null;

      const nextId = order[idx + 1];
      const edge = nextId ? edgeMap.get(`${nodeId}->${nextId}`) : null;

      return { nodeId, node, edge };
    })
    .filter(Boolean) as Array<{
    nodeId: string;
    node: (typeof arch.nodes)[number];
    edge: (typeof arch.edges)[number] | null;
  }>;

  return (
    <div className="aspect-video w-full bg-[#1A1A1A] relative swiss-grid p-4 sm:p-8 flex items-center justify-center overflow-visible">
      <div className="absolute top-4 left-4">
        <span className="rounded bg-primary/20 px-2 py-1 text-xs font-mono text-primary border border-primary/20 flex items-center gap-2">
          <Workflow size={18} strokeWidth={2.75} />
          {arch.badgeLabel ?? "System Architecture"}
        </span>
      </div>

      {/* ✅ MOBILE: stacked */}
      <div className="lg:hidden w-full max-w-sm mx-auto mt-12 flex flex-col gap-4 overflow-visible">
        {steps.map((step) => (
          <div key={step.nodeId} className="flex flex-col items-stretch">
            <ArchitectureNode node={step.node} />

            {/* connector to next */}
            {step.edge ? <VerticalEdge edge={step.edge} /> : null}
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP: pipeline */}
      <div className="hidden lg:flex relative w-full max-w-2xl items-center justify-between gap-4 overflow-visible">
        {steps.map((step) => (
          <div key={step.nodeId} className="flex items-center gap-4 flex-1">
            <ArchitectureNode node={step.node} />
            {step.edge ? <ArchitectureEdge edge={step.edge} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureNode({
  node,
}: {
  node: {
    title: string;
    subtitle?: string;
    icon?: string;
    iconColorClass?: string;
    hoverBorderClass?: string;
    tooltip?: { title?: string; body: string };
  };
}) {
  return (
    <div className="relative group mx-auto">
      <div
        className={[
          // ✅ responsive width
          "h-24 w-full max-w-[18rem] md:w-40 md:max-w-none",
          "rounded-lg border border-white/10 bg-surface-dark p-3 shadow-lg",
          "flex flex-col items-center justify-center gap-2 relative z-10 transition-colors cursor-help",
          node.hoverBorderClass ?? "",
        ].join(" ")}
      >
        {node.icon ? (
          <div className="flex items-center gap-2">
            <Icon
              name={node.icon as IconName}
              className={`h-5 w-5 ${node.iconColorClass ?? "text-text-dim"}`}
            />
          </div>
        ) : null}

        <span className="text-xs font-bold text-white text-center">
          {node.title}
        </span>
        {node.subtitle ? (
          <span className="text-[10px] text-text-dim text-center">
            {node.subtitle}
          </span>
        ) : null}
      </div>

      {/* tooltip */}
      {node.tooltip ? (
        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-56 rounded bg-black border border-white/10 p-2 text-[10px] text-text-dim opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
          {node.tooltip.title ? (
            <span className="block font-bold text-white mb-1">
              {node.tooltip.title}
            </span>
          ) : null}
          {node.tooltip.body}
        </div>
      ) : null}
    </div>
  );
}

/** ✅ DESKTOP EDGE (fixes circled label) */
function ArchitectureEdge({
  edge,
}: {
  edge: { label?: string; gradientClass?: string; ping?: boolean };
}) {
  const gradient = edge.gradientClass ?? "from-white/15 to-white/5";

  return (
    <div className="relative flex-1 py-6 overflow-visible">
      <div className={`h-0.5 w-full bg-linear-to-r ${gradient}`} />

      {/* ✅ label ABOVE line (no negative top) */}
      {edge.label ? (
        <div className="z-20 absolute top-1/8 left-1/2 bottom-full mb-2 -translate-x-1/2 px-1.5 py-0.5 text-[10px] text-text-dim font-mono whitespace-nowrap">
          {edge.label}
        </div>
      ) : null}

      {/* {edge.ping ? (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 animate-[ping_3s_linear_infinite]" />
      ) : null} */}
    </div>
  );
}

/** ✅ MOBILE CONNECTOR */
function VerticalEdge({ edge }: { edge: { label?: string; ping?: boolean } }) {
  return (
    <div className="relative mx-auto h-10 w-px bg-white/15 overflow-visible">
      {edge.label ? (
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-3 rounded bg-[#1A1A1A] px-1.5 py-0.5 text-[10px] text-text-dim border border-white/10 font-mono whitespace-nowrap">
          {edge.label}
        </div>
      ) : null}

      {edge.ping ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 animate-[ping_3s_linear_infinite]" />
      ) : (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-blue-400" />
      )}
    </div>
  );
}
