function countDivider(count) {
  if (!count) return 0;
  const fixed = parseInt(count.toString());
  if (!fixed) return 0;
  const dividedCount = fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dividedCount;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000) / exdays);

  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export { countDivider, setCookie, getCookie };
