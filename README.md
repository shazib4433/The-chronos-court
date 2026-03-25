🏛️ THE CHRONOS COURT: DEFINITIVE EDITION
A High-Fidelity Physics-Based Arcade Experience

📜 Project Overview
The Chronos Court is a modern reimagining of the classic "bat and ball" genre, built as a sophisticated physics simulation. Unlike traditional linear games, it features a Non-Linear Gravity Well (The Nexus) that warps the ball's trajectory. This version has been optimized for a Mouse-Only professional UI, featuring real-time pause systems and a dramatic final boss phase.

🚀 Modern Engineering Features
While "Pong" is decades old, The Chronos Court utilizes modern Web APIs and design patterns that were unavailable in a standard browser 20 years ago:
1. GPU-Accelerated Vector Math
The game uses the HTML5 Canvas API, leveraging the computer's GPU to calculate thousands of particle positions and vector trajectories at a locked 60 FPS, ensuring zero input lag.
2. Reactive Layout Engine (100% Zoom Optimized)
The UI uses a Flexbox "Shrink-to-Fit" strategy. Regardless of your monitor size or browser zoom (100%), the game container, header, and action bars are mathematically constrained to fit within the viewport (100vh), eliminating the need for scrolling.
3. Kinetic Particle & Glow Systems
Every collision triggers a high-fidelity particle explosion with independent alpha-decay. The UI features a Neon-Glow CSS Engine, where every button reacts to mouse-hover with a cyan or orange luminous flux (20px blur radius).
4. Speed Normalization & Escape Velocity
To prevent "Orbital Decay" (where the ball gets stuck in the center), the engine runs a Normalization Algorithm:

If the speed drops below the minSpeed threshold while in the gravity well, the engine re-calculates the velocity vectors to maintain kinetic energy.

⚠️ STATE TRIGGER: THE TIME COLLAPSE
The most advanced feature of the engine is the Time Collapse (Boss Phase). This is a state-driven event triggered when a player reaches 8 points.

• Dynamic Environment: The background shifts from Copper to Crimson using CSS Radial Gradients.

• Oscillating Gravity: The Nexus (Gravity Well) loses its fixed position and begins to oscillate vertically using a Sine wave function: y = 300 + \sin(\text{angle}) \times 120.

• Chaos Logic: Because the gravity source is moving, the "safe" return angles for the ball are constantly shifting, forcing the player to adapt to real-time environmental changes.

💡 THE "NASA SLINGSHOT" EFFECT
The gravity logic used in The Nexus is modeled after Gravitational Assist maneuvers. Just as NASA uses the gravity of planets like Jupiter to "slingshot" probes to the outer solar system, players can use the central Nexus to accelerate the orb to speeds exceeding its base velocity.

🕹️ How to Play (Mouse-Only)
• Move Paddle: Simply move your Mouse over the game area. The paddle follows your cursor with sub-pixel precision.

• Fine Tuning: Use the Mouse Scroll Wheel for micro-adjustments.

• Pause System: Click the PAUSE SYSTEM button below the court to halt the timeline.

• Victory: Reach 10 Points to defeat the Chronos AI.

🛠️ Technical Stack
• Language: JavaScript (ES6+ Object Oriented Programming)

• Rendering: HTML5 Canvas / 2D Context

• Styling: CSS3 (Flexbox, Viewport Units, Backdrop-Filters)

• Architecture: State-based Game Loop with RequestAnimationFrame
 