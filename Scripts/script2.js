var input = document.querySelector("#mobile");

 window.intlTelInput(input, {
    initialCountry: 'id',
    nationalMode: true,
    utilsScript: 'js/utils.js'
});


for (const dropdown of document.querySelectorAll(".select-box")) {
  dropdown.addEventListener('click', function() {
      this.querySelector('.dropdown-select').classList.toggle('open');
  })
}

window.addEventListener('click', function(e) {
  for (const select of document.querySelectorAll('.dropdown-select')) {
      if (!select.contains(e.target)) {
          select.classList.remove('open');
      }
  }
});

for (const option of document.querySelectorAll(".option")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.dropdown-select').querySelector('.trigger span').textContent = this.textContent;
          this.closest('.dropdown-select').querySelector('.trigger span').style.color = "white";
      }
  })
}