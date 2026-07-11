"use client";

import React, { memo, forwardRef } from "react";
import { LiquidMetal as LiquidMetalShader } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

export const LiquidMetal = memo(function LiquidMetal({
  colorBack = "#DFFF00",
  colorTint = "#ffffff",
  speed = 0.35,
  repetition = 4,
  distortion = 0.08,
  scale = 1,
  className,
  style,
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        className
      )}
      style={style}
    >
      <LiquidMetalShader
        colorBack={colorBack}
        colorTint={colorTint}
        speed={speed}
        repetition={repetition}
        distortion={distortion}
        softness={0}
        shiftRed={0.3}
        shiftBlue={-0.3}
        angle={45}
        shape="none"
        scale={scale}
        fit="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
});

LiquidMetal.displayName = "LiquidMetal";

export const LiquidMetalButton = forwardRef(
  (
    {
      children,
      icon,
      borderWidth = 2,
      metalConfig,
      size = "md",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "py-1.5 pl-1.5 pr-4 gap-2 text-sm",
      md: "py-2 pl-2 pr-5 gap-3 text-sm",
      lg: "py-3 pl-3 pr-7 gap-4 text-base",
    };

    const iconSizes = {
      sm: "w-7 h-7",
      md: "w-8 h-8",
      lg: "w-10 h-10",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "relative group cursor-pointer border-none bg-transparent p-0 outline-none transition-all duration-300",
          "hover:scale-[1.03]",
          "active:scale-[0.98]",
          "disabled:opacity-50",
          "disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        <div
          className="relative rounded-full overflow-hidden"
          style={{
            padding: borderWidth,
          }}
        >
          {/* Liquid Border */}
          <LiquidMetal
            colorBack={
              metalConfig?.colorBack ?? "#DFFF00"
            }
            colorTint={
              metalConfig?.colorTint ?? "#ffffff"
            }
            speed={
              metalConfig?.speed ?? 0.35
            }
            repetition={
              metalConfig?.repetition ?? 4
            }
            distortion={
              metalConfig?.distortion ?? 0.08
            }
            scale={
              metalConfig?.scale ?? 1
            }
            className="absolute inset-0 rounded-full"
          />

          {/* Button Body */}
          <div
            className={cn(
              "relative z-10 rounded-full flex items-center",
              "bg-[#0b0b0b]",
              "group-hover:bg-[#111111]",
              "transition-all duration-300",
              sizeStyles[size]
            )}
          >
            {icon && (
              <div
                className={cn(
                  "rounded-full flex items-center justify-center",
                  "bg-[#151515]",
                  "group-hover:bg-[#1a1a1a]",
                  "transition-all duration-300",
                  iconSizes[size]
                )}
              >
                <span className="text-[#DFFF00]">
                  {icon}
                </span>
              </div>
            )}

            <span
              className="
                font-medium
                tracking-tight
                text-white
                whitespace-nowrap
              "
            >
              {children}
            </span>
          </div>
        </div>
      </button>
    );
  }
);

LiquidMetalButton.displayName = "LiquidMetalButton";

export default LiquidMetalButton;