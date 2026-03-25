🏛️ THE CHRONOS COURT: DEFINITIVE EDITION
A High-Fidelity Physics-Based Arcade Experience

🎯 Chosen Vertical: Gaming & Creative Tech
This project explores the Creative Technology vertical, specifically simulating complex physical phenomena like non-linear gravity and kinetic motion within a high-performance, responsive browser environment.

🛠️ How the Solution Works
The application operates as a Real-Time Physics Simulation rather than a static game.

1. The Game Loop: Uses requestAnimationFrame to sync with the monitor's refresh rate (60FPS), ensuring smooth motion.

2. Rendering: Utilizes the HTML5 Canvas 2D API to draw frames dynamically, allowing for hundreds of independent particles without CPU lag.

3. Collision Engine: Implements AABB (Axis-Aligned Bounding Box) detection. When a collision is detected, the ball's velocity is inverted and slightly multiplied (1.05x) to create an escalating challenge.

4. Input Mapping: A global mouse listener maps the viewport coordinates to the internal 800x600 canvas coordinate system, allowing the paddle to follow the user's cursor with sub-pixel precision.

🧠 Approach and Logic
The engine is built on State-Driven Animation. Every object is a physical entity with velocity vectors (dx, dy).
Vector Summation: The ball's trajectory is the result of its own velocity added to the instantaneous gravitational pull of the Nexus.
Speed Normalization: To prevent the ball from losing momentum in the gravity well, the engine scale-corrects vectors using:

🚀 The "NASA Slingshot" Physics
The gravity logic is mathematically modeled after Gravitational Assist maneuvers used in aerospace engineering.

• The Logic: Just as NASA uses the gravity of planets like Jupiter to "slingshot" probes to the outer solar system, players can use the central Nexus to accelerate the orb to speeds exceeding its base velocity. This turns the environment into a dynamic tactical tool.

⚠️ Assumptions Made
To ensure the stability of the simulation, the following assumptions were made during development:

1. Refresh Rate: Assumes a standard 60Hz display; logic is frame-rate independent but optimized for 60FPS.

2. Aspect Ratio: Assumes a landscape-oriented display; the CSS uses aspect-ratio: 8/6 to maintain internal physics integrity regardless of window size.

3. Input Device: Assumes the use of a high-precision pointing device (Mouse or Trackpad) for the "Mouse-Only" interaction model.

🕹️ How to Use
1. Launch: Open index.html in a modern browser.

2. Select Timeline: Click a difficulty to initialize the physics.

3. Control: Move the Mouse vertically to position the paddle. Use the Scroll Wheel for fine-tuning.

4. Boss Trigger: Reach 8 points to activate Time Collapse (moving gravity well).

🤖 AI Integration: Google Gemini Pro
This application was developed in collaboration with Google's Gemini Pro.

• Usage: Gemini Pro served as the Systems Architect and Physics Consultant.

• Implementation: Gemini was used to optimize the Sine-wave oscillation math for the Time Collapse phase (y = 300 + \sin(\text{angle}) \times 150) and to design the responsive CSS layout to ensure a "zero-scroll" experience at 100% zoom. This partnership allowed for the rapid implementation of the NASA-inspired slingshot logic.
 