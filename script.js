   /* =========================================================
       WHATSAPP ORDER
    ========================================================= */

    function orderProduct(productName) {

      const phone = "251913191695";

      const message =
        `Hello diamond solar ,%0A%0A` +
        `I am interested in:%0A` +
        `Product: ${productName}%0A%0A` +
        `Quantity: ` +
        ``;

      const whatsappURL =
        `https://wa.me/${phone}?text=${message}`;

      window.open(whatsappURL, "_blank");

    }


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuButton =
      document.getElementById("menuButton");

    const mobileMenu =
      document.getElementById("mobileMenu");


    menuButton.addEventListener("click", function () {

      mobileMenu.classList.toggle("active");

    });


    /* Close mobile menu after clicking a link */

    const mobileLinks =
      document.querySelectorAll(".mobile-menu a");


    mobileLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

      });

    });


    /* =========================================================
       SEARCH BOX
    ========================================================= */

    const searchButton =
      document.getElementById("searchButton");

    const searchBox =
      document.getElementById("searchBox");

    const searchInput =
      document.getElementById("searchInput");


    searchButton.addEventListener("click", function () {

      searchBox.classList.toggle("active");

      if (searchBox.classList.contains("active")) {

        searchInput.focus();

      }

    });


    /* =========================================================
       PRODUCT SEARCH
    ========================================================= */

    searchInput.addEventListener("input", function () {

      const search =
        searchInput.value.toLowerCase();

      const products =
        document.querySelectorAll(".product");


      products.forEach(function (product) {

        const productText =
          product.innerText.toLowerCase();

        if (productText.includes(search)) {

          product.style.display = "";

        } else {

          product.style.display = "none";

        }

      });

    });


    /* =========================================================
       PRODUCT FILTER
    ========================================================= */

    const filterButtons =
      document.querySelectorAll(".filter-btn");

    const products =
      document.querySelectorAll(".product");


    filterButtons.forEach(function (button) {

      button.addEventListener("click", function () {

        /* Remove active class */

        filterButtons.forEach(function (btn) {

          btn.classList.remove("active");

        });

        /* Add active class */

        button.classList.add("active");


        const filter =
          button.dataset.filter;


        products.forEach(function (product) {

          const category =
            product.dataset.category;


          if (
            filter === "all" ||
            category === filter
          ) {

            product.style.display = "";

          } else {

            product.style.display = "none";

          }

        });

      });

    });