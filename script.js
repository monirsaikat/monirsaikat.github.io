const btn = document.getElementById('theme');
const root = document.documentElement;

const set = t => {
  root.dataset.theme = t;
  btn.textContent = t === 'dark' ? 'Light mode' : 'Dark mode';
  try { localStorage.setItem('theme', t); } catch {}
};

let saved;
try { saved = localStorage.getItem('theme'); } catch {}
set(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
btn.onclick = () => set(root.dataset.theme === 'dark' ? 'light' : 'dark');

document.getElementById('year').textContent = new Date().getFullYear();
