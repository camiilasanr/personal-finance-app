import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}) {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div
      className={cn(
        "relative rounded-[30px] p-[1px] overflow-hidden",
        containerClassName
      )}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        style={{
          backgroundSize: "300% 300%",
        }}
        className="
          absolute
          inset-0
          rounded-[30px]
          opacity-30
          blur-2xl
        "
      >
        <div
          className="
            h-full
            w-full
            rounded-[30px]
            bg-[radial-gradient(circle_at_top_right,rgba(255,92,0,.9),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,.08),transparent_40%),radial-gradient(circle_at_center,rgba(255,92,0,.12),transparent_65%)]
          "
        />
      </motion.div>

      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        style={{
          backgroundSize: "300% 300%",
        }}
        className="
          absolute
          inset-0
          rounded-[30px]
          opacity-70
        "
      >
        <div
          className="
            h-full
            w-full
            rounded-[30px]
            bg-[radial-gradient(circle_at_top_right,rgba(255,92,0,.55),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,.06),transparent_45%)]
          "
        />
      </motion.div>

      <div
        className={cn(
          "relative z-10 rounded-[30px] bg-[rgba(18,18,18,.78)] backdrop-blur-[32px]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}