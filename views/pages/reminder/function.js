/* eslint-disable arrow-body-style */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable array-callback-return */
document.querySelector('.hours').innerHTML = (
  new Array(24).fill(0).map((n, i) => {
    return `
      <div>
      ${i < 10 ? "0"+i : i}
      </div>
    `;
  }).join("")
);
document.querySelector('.minutes').innerHTML = (
  new Array(60).fill(0).map((n, i) => {
    return `
      <div>
      ${i < 10 ? "0"+i : i}
      </div>
    `;
  }).join("")
);
document.querySelector('.seconds').innerHTML = (
  new Array(60).fill(0).map((n, i) => {
    return `
      <div>
      ${i < 10 ? "0"+i : i}
      </div>
    `;
  }).join("")
);