import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // 最大傾斜角度（度）
  perspective?: number; // 遠近感
  glare?: boolean; // 光沢エフェクト
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  perspective = 1000,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{
    transform: string;
    glarePos: { x: number; y: number; opacity: number };
  }>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    glarePos: { x: 50, y: 50, opacity: 0 },
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    // タッチや粗いポインタ環境は無視
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      glarePos: { x: glareX, y: glareY, opacity: 0.18 },
    });
  };

  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: none)").matches) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      glarePos: { x: 50, y: 50, opacity: 0 },
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform ease-out will-change-transform ${className}`}
      style={{
        transform: style.transform,
        transformStyle: "preserve-3d",
        transitionDuration: isHovered ? "120ms" : "500ms",
      }}
    >
      {children}

      {/* 光沢（Glare）オーバーレイ */}
      {glare && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 overflow-hidden -z-0"
          style={{
            background: `radial-gradient(circle at ${style.glarePos.x}% ${style.glarePos.y}%, rgba(255, 255, 255, ${style.glarePos.opacity}) 0%, transparent 65%)`,
          }}
        />
      )}
    </div>
  );
}
