🏛️ THE CHRONOS COURT: DEFINITIVE EDITION
A High-Fidelity Physics-Based Arcade Experience

🎯 Chosen Vertical: Gaming & Creative Tech
This project explores the Creative Technology vertical, simulating complex physical phenomena like non-linear gravity and kinetic motion within a high-performance browser environment.

🧠 Approach and Logic

The core logic is built on a State-Driven Animation Loop. The game treats every object as a physical entity with velocity vectors (dx, dy).
Vector Summation: The ball's trajectory is the result of its own velocity added to the instantaneous gravitational pull of the Nexus.

Speed Normalization Algorithm: To ensure consistent playability, the engine scale-corrects vectors to maintain "Escape 
Velocity" using:
🚀 The "NASA Slingshot" Physics
The gravity logic used in The Nexus is mathematically modeled after Gravitational Assist maneuvers used in real-world aerospace engineering.
• The Point: Just as NASA uses the gravity of planets like Jupiter to "slingshot" probes to the outer solar system, players can use the central Nexus to accelerate the orb to speeds exceeding its base velocity. This turns the environment from a static background into a dynamic tactical tool.

🕹️ How to Use
1. Launch: Open index.html in any modern web browser (Chrome/Edge recommended).
2. Select Timeline: Click a difficulty button (Easy, Medium, or Hard) to initialize the physics engine.
3. Paddle Control: * Mouse Move: Move your cursor vertically over the canvas; the paddle follows with sub-pixel precision.
• Scroll: Use the mouse wheel for micro-adjustments during high-speed volleys.
4. In-Game Actions: Use the Action Bar below the canvas to Pause System or Restart Court at any time without refreshing the page.
5. Boss Trigger: When a score of 8 is reached, the Time Collapse phase begins—the Nexus will start moving, and the court will turn crimson.

🤖 AI Integration: Google Gemini Pro
This application was developed in collaboration with Google's Gemini Pro.
• Usage: Gemini Pro served as the Systems Architect and Physics Consultant.
• Implementation: It was utilized to calculate the Sine-wave oscillation for the Time Collapse phase and to optimize the responsive CSS layout to ensure a "zero-scroll" experience at 100% zoom. This partnership allowed for high-level architectural decisions, such as the implementation of the NASA-inspired slingshot logic.

🛠️ Technical Stack & Evaluation Focus
• Language: JavaScript (ES6+ OOP), HTML5 Canvas, CSS3.
• Efficiency: GPU-accelerated rendering via the Canvas 2D API.
• Accessibility: High-contrast neon UI with a "Mouse-Only" interaction model for inclusive design.
• Maintenance: Modular class structures for Particles, Paddles, and the Nexus.