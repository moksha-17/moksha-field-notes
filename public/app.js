'use strict';
const terminal = document.querySelector('#terminal');
const output = document.querySelector('#output');
const input = document.querySelector('#command');
const history = [];
let cursor = 0;
let returnFocus;
function print(message) {
  const line = document.createElement('p');
  line.textContent = message;
  output.append(line);
  while (output.children.length > 120) output.firstElementChild.remove();
  output.scrollTop = output.scrollHeight;
}
function openTerminal(event) {
  if (terminal.open) return;
  returnFocus = event?.currentTarget || document.activeElement;
  terminal.showModal();
  if (!output.children.length) print('Secret workspace unlocked. ✦\nWelcome to MOKSHA_OS.\nType help to see what you can do.');
  input.focus();
}
for (const id of ['secret', 'notebook-terminal']) document.getElementById(id).addEventListener('click', openTerminal);
document.querySelector('#close-terminal').addEventListener('click', () => terminal.close());
terminal.addEventListener('close', () => returnFocus?.focus());
const responses = {
  help: 'COMMANDS\nabout     Meet the developer\nskills    Inspect the toolkit\nprojects  Jump to selected work\nsecret    A note from the developer\nroll      Roll a 20-sided idea die\nclear     Clear this terminal\nexit      Return to the portfolio',
  about: 'Moksha — CSE student, AI explorer, full-stack builder.\nCuriosity is the starting point. Building is how I learn.',
  skills: 'Frontend: React / JavaScript / HTML / CSS\nBackend: Python / Flask / REST APIs\nExploring: LLMs / TF-IDF / machine learning',
  secret: 'You found it!\nGreat interfaces make the obvious easy and reward the curious.\nYour next mission: make one small thing work today.'
};
document.querySelector('#command-form').addEventListener('submit', event => {
  event.preventDefault();
  const raw = input.value.trim().slice(0, 200);
  if (!raw) return;
  input.value = '';
  history.push(raw);
  if (history.length > 50) history.shift();
  cursor = history.length;
  print('$ ' + raw);
  const command = raw.toLowerCase();
  if (Object.hasOwn(responses, command)) print(responses[command]);
  else if (command === 'clear') output.replaceChildren();
  else if (command === 'exit') terminal.close();
  else if (command === 'projects') { terminal.close(); document.querySelector('#projects').scrollIntoView(); }
  else if (command === 'roll') {
    const roll = Math.floor(Math.random() * 20) + 1;
    print('You rolled ' + roll + '/20. ' + (roll === 20 ? 'Critical curiosity! Build your wildest idea.' : 'Quest: improve one detail in your current project.'));
  } else print('Command not found: ' + raw + '\nType help for available commands.');
});
input.addEventListener('keydown', event => {
  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
  event.preventDefault();
  cursor = Math.max(0, Math.min(history.length, cursor + (event.key === 'ArrowUp' ? -1 : 1)));
  input.value = history[cursor] || '';
});
document.querySelector('#year').textContent = new Date().getFullYear();
