const switcher = document.createElement('select');
switcher.classList.add('switcher');
switcher.innerHTML = `
<option value="" disabled selected id="ver0">-выберите версию-</option>
<option value="/" id="ver1">1st version</option>
<option value="/v2.html" id="ver2">2nd version</option>`;
document.body.appendChild(switcher);
switcher.style.cssText = `
  display: block;
  position: absolute;
  top: 0;
  z-index: 5;
`;
switcher.onchange = (e) => {
    console.log(e.target.value);
    const origin = new URL(window.location.href).origin;
    window.location.href = origin + e.target.value;
};
