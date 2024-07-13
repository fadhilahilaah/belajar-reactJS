const app = document.getElementById('app');

const heading = document.createElement('h1');

const headingContent = document.createTextNode('Belajar React bareng WPU🚀');

// Append teks ke dalam h1
heading.appendChild(headingContent);

// simpan elemen h1 di dalam div id app
app.appendChild(heading);