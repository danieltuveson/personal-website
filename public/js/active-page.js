const url = document.URL;

// returns true if url matches the regex, else false
const isPage = (regex) => {
  return url.search(regex) !== -1;
}

// returns current page's as a string
const getCurrentPage = (url) => {
  let currentPage;

  if (isPage(/resume/i)) {
    currentPage = 'resume';
  } else if (isPage(/portfolio/i)) {
    currentPage = 'portfolio';
  } else if (isPage(/contact/i)) {
    currentPage = 'contact';
  } else {
    currentPage = 'home';
  }

  return currentPage + 'Nav';
}

let elt = document.getElementById(getCurrentPage(url));
elt.className += ' active';