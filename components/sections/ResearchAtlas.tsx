"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { atlasNodes, atlasEdges } from "@/lib/data";

type NodeId = (typeof atlasNodes)[number]["id"];

/* ── helpers ──────────────────────────────────────────── */
function getPos(node: (typeof atlasNodes)[number], w: number, h: number) {
  return { x: (node.x / 100) * w, y: (node.y / 100) * h };
}

function CurvedEdge({
  x1, y1, x2, y2,
  active,
}: {
  x1: number; y1: number; x2: number; y2: number; active: boolean;
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 30;
  return (
    <motion.path
      d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
      fill="none"
      stroke={active ? "var(--copper)" : "var(--border)"}
      strokeWidth={active ? 1.5 : 1}
      strokeDasharray={active ? "none" : "4 4"}
      initial={false}
      animate={{ opacity: active ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
    />
  );
}

/* ── main component ───────────────────────────────────── */
export function ResearchAtlas() {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  const [hovered, setHovered] = useState<NodeId | null>(null);
  const [dims, setDims] = useState({ w: 900, h: 500 });

  /* mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / rect.width * 14);
      mouseY.set((e.clientY - cy) / rect.height * 10);
    },
    [mouseX, mouseY]
  );

  const handleResize = useCallback(() => {
    if (ref.current) {
      setDims({ w: ref.current.offsetWidth, h: ref.current.offsetHeight });
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  /* active edges for hovered node */
  const activeEdges = hovered
    ? atlasEdges.filter(([a, b]) => a === hovered || b === hovered)
    : [];
  const isEdgeActive = (a: string, b: string) =>
    activeEdges.some(([ea, eb]) => (ea === a && eb === b) || (ea === b && eb === a));

  const hoveredNode = atlasNodes.find((n) => n.id === hovered);

  return (
    <section
      ref={sectionRef}
      className="section-pad border-t border-[var(--border)] overflow-hidden"
    >
      <div className="max-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-4"
        >
          <span className="label text-[var(--ink-faint)]">Research atlas</span>
          <div className="flex-1 rule" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          className="text-xl md:text-2xl font-light text-[var(--ink-muted)] mb-12 max-w-xl"
        >
          A map of the ideas I live in.{" "}
          <em>Hover a node to trace connections.</em>
        </motion.p>

        {/* Atlas canvas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); setHovered(null); }}
          className="relative w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden"
          style={{ height: "clamp(380px, 55vw, 560px)" }}
        >
          <motion.svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ x: springX, y: springY }}
          >
            {/* Edges */}
            {atlasEdges.map(([a, b]) => {
              const na = atlasNodes.find((n) => n.id === a)!;
              const nb = atlasNodes.find((n) => n.id === b)!;
              const pa = getPos(na, dims.w, dims.h);
              const pb = getPos(nb, dims.w, dims.h);
              return (
                <CurvedEdge
                  key={`${a}-${b}`}
                  x1={pa.x} y1={pa.y}
                  x2={pb.x} y2={pb.y}
                  active={isEdgeActive(a, b)}
                />
              );
            })}

            {/* Nodes */}
            {atlasNodes.map((node) => {
              const pos = getPos(node, dims.w, dims.h);
              const isHov = hovered === node.id;
              const isConnected =
                hovered !== null &&
                (atlasEdges.some(([a, b]) => (a === hovered && b === node.id) || (b === hovered && a === node.id)));
              const isFaded = hovered !== null && !isHov && !isConnected;

              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x},${pos.y})`}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHovered(node.id as NodeId)}
                >
                  {/* Outer ring on hover */}
                  <motion.circle
                    r={24}
                    fill="transparent"
                    stroke={node.color === "copper" ? "var(--copper)" : "var(--sage)"}
                    strokeWidth={1}
                    animate={{ opacity: isHov ? 0.4 : 0, scale: isHov ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Main dot */}
                  <motion.circle
                    r={6}
                    fill={node.color === "copper" ? "var(--copper)" : "var(--sage)"}
                    animate={{
                      r: isHov ? 9 : isConnected ? 7 : 6,
                      opacity: isFaded ? 0.2 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                  />

                  {/* Label */}
                  <motion.text
                    dy={-16}
                    textAnchor="middle"
                    fontSize={10}
                    fontFamily="var(--font-inter), system-ui, sans-serif"
                    letterSpacing="0.06em"
                    fill="var(--ink-muted)"
                    style={{ textTransform: "uppercase", userSelect: "none" }}
                    animate={{ opacity: isFaded ? 0.15 : 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {node.label.split("\n").map((line, li) => (
                      <tspan key={li} x={0} dy={li === 0 ? 0 : 12}>
                        {line}
                      </tspan>
                    ))}
                  </motion.text>
                </g>
              );
            })}
          </motion.svg>

          {/* Tooltip */}
          <motion.div
            initial={false}
            animate={{ opacity: hoveredNode ? 1 : 0, y: hoveredNode ? 0 : 6 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-5 left-5 right-5 md:left-auto md:right-5 md:max-w-xs rounded-xl border border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm p-4 pointer-events-none"
          >
            {hoveredNode && (
              <>
                <p className="label text-[var(--ink-faint)] mb-1">{hoveredNode.label.replace("\n", " ")}</p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{hoveredNode.description}</p>
              </>
            )}
          </motion.div>

          {/* Hint when nothing hovered */}
          <motion.p
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-5 left-5 label text-[var(--ink-faint)] pointer-events-none"
          >
            Hover to explore ↗
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
