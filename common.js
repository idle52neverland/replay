function normalize(str) {
  return str.replace(/\s|,|-/g, '').toLowerCase();
}

function extractDate(title) {
  const match = title.match(/(\\d{4}-\\d{2}-\\d{2})/);
  return match ? new Date(match[1]) : new Date(0);
}
