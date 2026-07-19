"use client";

import { useState } from "react";

/**
 * Profile photo slot.
 *
 * TO ADD YOUR PICTURE:
 * Drop an image file named "profile.jpg" into the /public folder
 * (i.e. /public/profile.jpg). It will show up here automatically —
 * no code changes needed. Until then, a placeholder badge with your
 * initials is shown instead.
 */
export default function ProfilePhoto() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
      {/* corner ticks — badge framing, echoes a terminal readout window */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />

      <div className="aspect-[4/5] w-full bg-panel border border-line rounded-2xl overflow-hidden relative">
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/Profile.jpg"
            alt="Samuel Olayinka"
            className="w-full h-full object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_20%,rgba(232,177,77,0.12),transparent_60%)]">
            <span className="font-display text-5xl font-semibold text-gold">SO</span>
            <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
              Add /public/profile.jpg
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-mute uppercase tracking-widest">
        <span>SAMUEL OLAYINKA</span>
        <span className="flex items-center gap-1.5 text-signal">
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-blink" />
          Available
        </span>
      </div>
    </div>
  );
}
