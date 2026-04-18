"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════
   Scroller — Reuters-style scrollytelling engine for React

   Fires scroll-progress events as the user scrolls through
   "steps". Each step is a trigger point that can change the
   visual state of the background/sticky layer.

   Usage:
     <Scroller onStepChange={(index) => setActiveStep(index)}>
       <Scroller.Background>
         {/* sticky visual layer that reacts to steps *​/}
       </Scroller.Background>
       <Scroller.Steps>
         <Scroller.Step>First trigger</Scroller.Step>
         <Scroller.Step>Second trigger</Scroller.Step>
       </Scroller.Steps>
     </Scroller>
   ═══════════════════════════════════════════════════════════════ */

interface ScrollerContextValue {
  activeStep: number;
  progress: number; // 0-1 within current step
}

// ─── Step ───
interface StepProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Step({ children, className = "", style }: StepProps) {
  return (
    <div
      className={`scroller-step ${className}`}
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Background (sticky layer) ───
interface BackgroundProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Background({ children, className = "", style }: BackgroundProps) {
  return (
    <div
      className={`scroller-background ${className}`}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        zIndex: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Steps container ───
interface StepsProps {
  children: ReactNode;
  className?: string;
}

function Steps({ children, className = "" }: StepsProps) {
  return (
    <div
      className={`scroller-steps ${className}`}
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Scroller ───
interface ScrollerProps {
  children: ReactNode;
  onStepChange?: (index: number) => void;
  onProgress?: (stepIndex: number, progress: number) => void;
  offset?: number; // 0-1, where in viewport the trigger fires (0.5 = center)
  className?: string;
}

function Scroller({
  children,
  onStepChange,
  onProgress,
  offset = 0.5,
  className = "",
}: ScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(-1);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const steps = container.querySelectorAll(".scroller-step");
    if (!steps.length) return;

    const triggerPoint = window.innerHeight * offset;

    let newActiveStep = -1;
    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
        newActiveStep = index;

        // Calculate progress within this step
        const stepProgress = (triggerPoint - rect.top) / rect.height;
        onProgress?.(index, Math.max(0, Math.min(1, stepProgress)));
      }
    });

    // Also handle case where we've scrolled past a step
    if (newActiveStep === -1) {
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.bottom <= triggerPoint) {
          newActiveStep = index;
        }
      });
    }

    if (newActiveStep !== activeStepRef.current && newActiveStep >= 0) {
      activeStepRef.current = newActiveStep;
      onStepChange?.(newActiveStep);
    }
  }, [offset, onStepChange, onProgress]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div ref={containerRef} className={`scroller-container ${className}`} style={{ position: "relative" }}>
      {children}
    </div>
  );
}

// Attach sub-components
Scroller.Background = Background;
Scroller.Steps = Steps;
Scroller.Step = Step;

export { Scroller, type ScrollerContextValue };
export default Scroller;
