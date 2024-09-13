function formatDate(timestamp) {
  const date = new Date(timestamp);

  const options = {
    weekday: "long", // e.g., "Monday"
    year: "numeric", // e.g., "2024"
    month: "long", // e.g., "August"
    day: "numeric", // e.g., "10"
    hour: "numeric", // e.g., "10"
    minute: "numeric", // e.g., "30"
    second: "numeric", // e.g., "45"
    timeZoneName: "short", // e.g., "PST"
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
}

function formatShortDate(dateString) {
  const date = new Date(dateString);

  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
}

function getCountryName(countryCode, locale = "en-US") {
  const regionNames = new Intl.DisplayNames([locale], { type: "region" });
  return regionNames.of(countryCode);
}

function getFlagEmoji(countryCode) {
  // Ensure the country code is uppercase
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export {
  formatDate,
  formatShortDate,
  formatTime,
  getCountryName,
  getFlagEmoji,
};
