/** * THE CHRONOS COURT - BOSS EDITION
*/
// --- GLOBAL SELECTORS ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const menu = document.getElementById('menu-overlay');
const statusText = document.getElementById('status-text');
// --- GAME STATE ---
let gameActive = false;
let isGameOver = false;
let playerScore = 0;
let opponentScore = 0;
let particles = [];
let frameCount = 0;
/** CLASSES **/
class Particle {
   constructor(x, y, color) {
       this.x = x; this.y = y; this.color = color;
       this.dx = (Math.random() - 0.5) * 8;
       this.dy = (Math.random() - 0.5) * 8;
       this.alpha = 1; this.decay = Math.random() * 0.02 + 0.02;
   }
   draw() {
       ctx.save(); ctx.globalAlpha = this.alpha; ctx.fillStyle = this.color;
       ctx.shadowBlur = 8; ctx.shadowColor = this.color;
       ctx.fillRect(this.x, this.y, 3, 3); ctx.restore();
   }
   update() { this.x += this.dx; this.y += this.dy; this.alpha -= this.decay; }
}
class Paddle {
   constructor(x, y, isPlayer) {
       this.x = x; this.y = y; this.width = 15; this.height = 100;
       this.isPlayer = isPlayer; this.dy = 0; this.speed = 8;
   }
   draw() {
       ctx.fillStyle = this.isPlayer ? '#00e5ff' : '#ff5722';
       ctx.shadowBlur = 15; ctx.shadowColor = ctx.fillStyle;
       ctx.fillRect(this.x, this.y, this.width, this.height);
       ctx.shadowBlur = 0;
   }
   update() {
       this.y += this.dy;
       if (this.y < 0) this.y = 0;
       if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;
   }
   aiUpdate(orb) {
       const center = this.y + this.height / 2;
       if (center < orb.y - 10) this.y += this.speed - 2;
       else if (center > orb.y + 10) this.y -= this.speed - 2;
   }
}
class Orb {
   constructor() {
       this.radius = 10;
       this.minSpeed = 7.5;
       this.reset();
   }
   reset() {
       this.x = canvas.width / 2; this.y = canvas.height / 2;
       this.dx = (Math.random() > 0.5 ? this.minSpeed : -this.minSpeed);
       this.dy = (Math.random() > 0.5 ? 5 : -5);
   }
   draw() {
       ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
       ctx.fillStyle = '#ffb300'; ctx.shadowBlur = 20; ctx.shadowColor = '#ffb300';
       ctx.fill(); ctx.closePath();
   }
   update() {
       this.x += this.dx; this.y += this.dy;
       const currentSpeed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
       if (currentSpeed < this.minSpeed) {
           const ratio = this.minSpeed / currentSpeed;
           this.dx *= ratio; this.dy *= ratio;
       }
       if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
           this.dy *= -1;
           createExplosion(this.x, this.y, '#ffb300');
       }
   }
}
class Nexus {
   constructor() {
       this.x = 400; this.y = 300; this.radius = 150; this.pull = 0.15;
       this.angle = 0;
   }
   draw() {
       const isBoss = (playerScore >= 8 || opponentScore >= 8);
       const coreColor = isBoss ? '#ff0000' : '#d4af37';
       ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
       ctx.strokeStyle = isBoss ? 'rgba(255, 0, 0, 0.2)' : '#d4af3733';
       ctx.setLineDash([5,10]); ctx.stroke(); ctx.setLineDash([]);
       ctx.beginPath(); ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
       ctx.fillStyle = '#2a201a'; ctx.fill();
       ctx.strokeStyle = coreColor; ctx.shadowBlur = 15; ctx.shadowColor = coreColor;
       ctx.stroke(); ctx.shadowBlur = 0;
   }
   update() {
       // BOSS PHASE: Nexus starts moving up and down
       if (playerScore >= 8 || opponentScore >= 8) {
           this.angle += 0.03;
           this.y = 300 + Math.sin(this.angle) * 120;
       }
   }
   apply(orb) {
       const dx = this.x - orb.x; const dy = this.y - orb.y;
       const dist = Math.sqrt(dx*dx + dy*dy);
       if (dist < this.radius && dist > 5) {
           orb.dx += (dx/dist) * this.pull; orb.dy += (dy/dist) * this.pull;
       }
   }
}
// --- INITIALIZE OBJECTS ---
const player = new Paddle(20, 250, true);
const opponent = new Paddle(765, 250, false);
const orb = new Orb();
const nexus = new Nexus();
function createExplosion(x, y, color) {
   for (let i = 0; i < 15; i++) particles.push(new Particle(x, y, color));
}
// --- START FUNCTION ---
window.startGame = function(difficulty) {
   menu.style.display = 'none';
   statusText.innerText = "ACTIVE";
   gameActive = true;
   if (difficulty === 'easy') {
       orb.dx = 5; orb.dy = 5; orb.minSpeed = 5.5; opponent.speed = 5; nexus.pull = 0.06;
   } else if (difficulty === 'hard') {
       orb.dx = 11; orb.dy = 11; orb.minSpeed = 11.5; opponent.speed = 10; nexus.pull = 0.28;
   } else {
       orb.dx = 7; orb.dy = 7; orb.minSpeed = 7.5; opponent.speed = 7.5; nexus.pull = 0.15;
   }
   gameLoop();
};
// --- CONTROLS ---
document.addEventListener('keydown', (e) => {
   if (isGameOver && e.key === ' ') location.reload();
   if (e.key === 'w' || e.key === 'ArrowUp') player.dy = -player.speed;
   if (e.key === 's' || e.key === 'ArrowDown') player.dy = player.speed;
});
document.addEventListener('keyup', () => player.dy = 0);
canvas.addEventListener('wheel', (e) => {
   e.preventDefault();
   player.y += e.deltaY * 0.4;
   if (player.y < 0) player.y = 0;
   if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}, { passive: false });
function drawBg() {
   const isBoss = (playerScore >= 8 || opponentScore >= 8);
   const innerColor = isBoss ? '#4a0000' : '#2a201a';
   const grad = ctx.createRadialGradient(400,300,0,400,300,800);
   grad.addColorStop(0, innerColor); grad.addColorStop(1, '#0d0a08');
   ctx.fillStyle = grad; ctx.fillRect(0,0,800,600);
   ctx.strokeStyle = isBoss ? 'rgba(255, 0, 0, 0.1)' : '#8b5a2b33';
   for(let x=0; x<=800; x+=50){ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,600); ctx.stroke();}
   for(let y=0; y<=600; y+=50){ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(800,y); ctx.stroke();}
}
function drawGameOver() {
   frameCount++;
   ctx.fillStyle = 'rgba(0,0,0,0.85)';
   ctx.fillRect(0, 0, 800, 600);
   ctx.fillStyle = '#d4af37'; ctx.font = '48px monospace'; ctx.textAlign = 'center';
   ctx.shadowBlur = 15; ctx.shadowColor = '#d4af37';
   const msg = playerScore >= 10 ? "PLAYER WON" : "CHRONOS WON";
   ctx.fillText(msg, 400, 280);
   const alpha = (Math.sin(frameCount * 0.05) + 1) / 2;
   ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`; ctx.font = '22px monospace';
   ctx.fillText("PRESS [SPACEBAR] TO RE-INITIALIZE", 400, 350);
   ctx.shadowBlur = 0;
   requestAnimationFrame(drawGameOver);
}
function gameLoop() {
   if (!gameActive) return;
   if (isGameOver) { drawGameOver(); return; }
   drawBg();
   nexus.update(); // NEW: Moves the nexus in boss phase
   nexus.draw();
   ctx.textAlign = 'center';
   ctx.fillStyle = '#00e5ff'; ctx.font = '20px monospace'; ctx.fillText(`PLAYER: ${playerScore}`, 200, 50);
   ctx.fillStyle = '#ff5722'; ctx.font = '20px monospace'; ctx.fillText(`CHRONOS: ${opponentScore}`, 600, 50);
   player.update(); opponent.aiUpdate(orb); nexus.apply(orb); orb.update();
   if (orb.x > 800) { playerScore++; createExplosion(800, orb.y, '#d4af37'); orb.reset(); }
   if (orb.x < 0) { opponentScore++; createExplosion(0, orb.y, '#ff5722'); orb.reset(); }
   if (playerScore >= 10 || opponentScore >= 10) isGameOver = true;
   if (orb.x < player.x + player.width && orb.y > player.y && orb.y < player.y + player.height) {
       orb.dx *= -1.05; orb.x = player.x + player.width; createExplosion(orb.x, orb.y, '#00e5ff');
   }
   if (orb.x > opponent.x && orb.y > opponent.y && orb.y < opponent.y + opponent.height) {
       orb.dx *= -1.05; orb.x = opponent.x; createExplosion(orb.x, orb.y, '#ff5722');
   }
   player.draw(); opponent.draw(); orb.draw();
   particles.forEach((p, i) => { if (p.alpha <= 0) particles.splice(i, 1); else { p.update(); p.draw(); } });
   requestAnimationFrame(gameLoop);
}
drawBg();