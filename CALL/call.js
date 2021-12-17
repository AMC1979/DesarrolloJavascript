var listItems = document.querySelectorAll('ul li');

for (var i = 0; i < listItems.length; i++) {
    (function () {
        console.log(this.innerHTML);
      }).call(listItems[i]);
  }
