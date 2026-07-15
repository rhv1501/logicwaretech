"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidChartProps {
  chart: string;
}

export default function MermaidChart({ chart }: MermaidChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "base",
      themeVariables: {
        fontFamily: "'Inter', sans-serif",
        primaryColor: "#ffffff",
        primaryTextColor: "#0a2540",
        primaryBorderColor: "#84b5fd",
        lineColor: "#94a3b8",
        secondaryColor: "#84b5fd",
        tertiaryColor: "#f8fafc",
        clusterBkg: "#f8fafc",
        clusterBorder: "#e2e8f0",
        fontSize: "15px",
        edgeLabelBackground: "#ffffff",
      },
      flowchart: {
        curve: "monotoneX",
        padding: 30,
        nodeSpacing: 80,
        rankSpacing: 80
      }
    });

    const renderChart = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch (error) {
        console.error("Failed to render Mermaid chart:", error);
      }
    };

    renderChart();
  }, [chart]);

  if (!svg) {
    return <div className="animate-pulse w-full h-[400px] bg-blue-50 rounded-3xl" />;
  }

  return (
    <div 
      ref={chartRef} 
      className="flex justify-center items-center w-full overflow-x-auto py-8" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
