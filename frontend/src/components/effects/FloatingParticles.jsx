import React, { useEffect, useRef } from "react";

export default function FloatingParticles({ count = 50 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Warm golden embers and romantic motes
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.6,
      speedY: -(Math.random() * 0.35 + 0.12),
      swayAmp: Math.random() * 0.6 + 0.2,
      swaySpeed: Math.random() * 0.02 + 0.005,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.6 + 0.2,
      fadeSpeed: Math.random() * 0.006 + 0.002,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.3 ? "212, 175, 55" : "244, 114, 182", // gold or warm rose mote
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.angle += p.swaySpeed;
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * p.swayAmp;

        p.opacity += p.fadeSpeed * p.fadeDir;
        if (p.opacity > 0.85) p.fadeDir = -1;
        if (p.opacity < 0.1) p.fadeDir = 1;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity * 0.65})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
