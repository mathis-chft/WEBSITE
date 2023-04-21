const express = require('express');
const path = require('path');
const crypto = require('crypto');

const app = express();

// Middleware pour ajouter le CSP dans les headers HTTP
app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.locals.nonce = nonce;
  res.setHeader('Content-Security-Policy', `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'strict-dynamic'; style-src 'self' 'nonce-${nonce}'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; frame-src 'self'; base-uri 'self'; form-action 'self'; report-uri https://mathischouffot.fr/csp-report;`);
  next();
});

// Servir les fichiers statiques de l'application Vue.js
app.use(express.static(path.join(__dirname, 'dist')));

// Rediriger toutes les requêtes vers l'application Vue.js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});