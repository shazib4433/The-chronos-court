🏛️ THE CHRONOS COURT
A High-Fidelity Physics-Based Arcade Experience

📜 Project Overview
The Chronos Court is a modern reimagining of the classic "bat and ball" genre. It moves away from predictable linear movement and introduces a Non-Linear Gravity Well (The Nexus) that warps the timeline of the game. Players must navigate shifting gravitational pull, speed normalization logic, and a chaotic "Boss Phase" to reach 10 points and achieve victory.

🚀 Why This Wasn't Possible 20 Years Ago
While "Pong" is decades old, the specific experience of The Chronos Court relies on technologies that were unavailable in 2006:
1. Hardware-Accelerated Vector Math (HTML5 Canvas)
20 years ago, browser games relied on Adobe Flash or Java Applets, which were CPU-heavy and slow. This game uses the HTML5 Canvas API, which leverages the computer's GPU to calculate thousands of particle positions and vector trajectories in real-time at a smooth 60 FPS.
2. High-Fidelity Particle Systems
The "Spark Explosion" effect upon every collision involves dozens of independent objects with their own gravity, velocity, and opacity decay. Managing this level of "Visual Juice" without lagging the browser is a hallmark of modern JavaScript engines.
3. Multi-Modal "Precision" Input
The integration of Mouse Wheel Scroll and high-polling rate Keyboard listeners allows for a level of paddle precision that older browser plugins couldn't handle. The movement is calculated with sub-pixel accuracy.
4. Adaptive AI & "Escape Velocity" Logic
The game features a Dynamic Physics Engine that prevents "Orbital Decay." Our engine uses Speed Normalization to ensure the ball always maintains enough kinetic energy to escape the center, creating a balanced and fair challenge.

💡 PRO TIP: THE SLINGSHOT EFFECT
The gravity logic used in The Nexus is mathematically modeled after Gravitational Assist maneuvers used in real-world aerospace engineering. Just as NASA uses the gravity of planets like Jupiter to "slingshot" probes to the outer solar system, players in The Chronos Court can use the central Nexus to accelerate the orb to speeds exceeding its base velocity, turning the environment itself into a weapon.

🕹️ How to Play
• Move: Use W / S, Arrow Keys, or your Mouse Scroll Wheel.

• Objective: Score 10 points against the Chronos AI.

• The Nexus: The center circle is a gravity well. Use it to "slingshot" the ball past the opponent.

• Boss Phase: At 8 points, the court enters Time Collapse. Watch the Nexus—it will start to move!

🛠️ Technical Stack
• Language: JavaScript (ES6+)

• Rendering: HTML5 Canvas API

• Styling: CSS3 (Flexbox & Radial Gradients)

• Architecture: Object-Oriented Programming (OOP) classes.
 