function dark() {
  localStorage.setItem('theme', 'dark');
  document.documentElement.style.setProperty('--color', 'white');
  document.documentElement.style.setProperty('--background', '#0f0f0f');
}

function light() {
  localStorage.setItem('theme', 'light');
  document.documentElement.style.setProperty('--color', 'black');
  document.documentElement.style.setProperty('--background', 'white');
}

let isDark = false;

if (localStorage.getItem('theme') == 'dark') { isDark = true; dark() }

function toggleTheme() {
  if (isDark) { light(); isDark = false }
  else { dark(); isDark = true }
}