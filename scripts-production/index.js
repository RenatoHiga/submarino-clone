"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var promotionsByDepartment = void 0;

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar" },
        React.createElement(
          "section",
          { className: "navbar__main-info" },
          React.createElement(
            "div",
            { className: "navbar__main-info-option" },
            React.createElement("img", {
              src: "./images/logos/submarino-logo-1.png",
              width: "224",
              height: "36"
            })
          ),
          React.createElement(
            "div",
            { className: "navbar__search-input" },
            React.createElement("input", {
              className: "navbar__input",
              placeholder: "O que voc\xEA t\xE1 procurando?"
            }),
            React.createElement("img", {
              src: "./images/icons/navbar-search-input.svg",
              className: "navbar__input-icon"
            })
          ),
          React.createElement(
            "div",
            { className: "navbar__my-profile" },
            React.createElement("img", {
              src: "./images/icons/profile-icon.svg",
              width: "45px",
              height: "45px"
            }),
            React.createElement(
              "p",
              { className: "navbar__my-profile-label" },
              "Meu perfil"
            )
          ),
          React.createElement(
            "div",
            { className: "navbar__main-info-option" },
            React.createElement("img", { src: "./images/icons/heart.svg", width: "30px", height: "30px" })
          ),
          React.createElement(
            "div",
            { className: "navbar__main-info-option" },
            React.createElement("img", { src: "./images/icons/cart.svg", width: "30px", height: "30px" })
          )
        ),
        React.createElement(
          "ul",
          { className: "navbar__departments" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Vem ver as lojas"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Baixe o APP"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Smartphones"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Inform\xE1tica"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Smart TVs"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Casa"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "navbar__departments-option", href: "#" },
              "Livros"
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

var Banner = function (_React$Component2) {
  _inherits(Banner, _React$Component2);

  function Banner(props) {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "banner" },
        React.createElement(
          "div",
          { className: "banner__button banner__button--left" },
          React.createElement("img", {
            src: "images/icons/banner-button.svg",
            className: "banner__button-image banner__button-image--left"
          })
        ),
        React.createElement("img", {
          className: "banner__image",
          src: "images/banners/main-banners/banner1.webp"
        }),
        React.createElement(
          "div",
          { className: "banner__button banner__button--right" },
          React.createElement("img", {
            src: "images/icons/banner-button.svg",
            className: "banner__button-image"
          })
        )
      );
    }
  }]);

  return Banner;
}(React.Component);

var PromotionsByDepartment = function (_React$Component3) {
  _inherits(PromotionsByDepartment, _React$Component3);

  function PromotionsByDepartment(props) {
    _classCallCheck(this, PromotionsByDepartment);

    return _possibleConstructorReturn(this, (PromotionsByDepartment.__proto__ || Object.getPrototypeOf(PromotionsByDepartment)).call(this, props));
  }

  _createClass(PromotionsByDepartment, [{
    key: "createMainPromotionsRow",
    value: function createMainPromotionsRow(promotions) {
      var mainPromotionsRow = [];

      // promotions = [promotions[2]];

      console.log(promotions, "this is promotions");

      mainPromotionsRow = promotions.map(function (promotion) {
        console.log(promotion);

        var isImagePortrait = promotion.image_orientation === "portrait";
        var imageOrientationClasses = void 0;

        if (isImagePortrait) {
          imageOrientationClasses = "promotions-by-department__product-image";
        } else {
          imageOrientationClasses = "promotions-by-department__product-image promotions-by-department__product-image--portrait";
        }

        var card = React.createElement(
          "div",
          { className: "promotions-by-department__container" },
          React.createElement(
            "span",
            { className: "promotions-by-department__name" },
            promotion.department_name,
            React.createElement("span", { className: "promotions-by-department__name-underline" })
          ),
          React.createElement(
            "div",
            { className: "promotions-by-department__card" },
            React.createElement(
              "div",
              { className: "promotions-by-department__text" },
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                promotion.first_card_title
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__discount" },
                promotion.discount_title
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                promotion.second_card_title
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check" },
                promotion.check_label
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check-rules" },
                "*Confira as regras"
              )
            ),
            React.createElement("img", { className: imageOrientationClasses, src: promotion.image })
          )
        );

        console.log(card);
        return card;
      });

      console.log();
      console.log(mainPromotionsRow);

      return mainPromotionsRow;
    }

    // renderPromotionsContainers() {
    //   const times_repeat_loop = 4;

    //   const promotionsContainers = [];

    //   for (let index = 0; index < times_repeat_loop; index++) {
    //     promotionsContainers.push(
    //       <div className="promotions-by-department__container">
    //         <span className="promotions-by-department__name">
    //           Tech
    //           <span className="promotions-by-department__name-underline"></span>
    //         </span>

    //         <div className="promotions-by-department__card">
    //           <div className="promotions-by-department__text">
    //             <span className="promotions-by-department__title">
    //               Smart TV's com até
    //             </span>

    //             <span className="promotions-by-department__discount">
    //               10% OFF
    //             </span>

    //             <span className="promotions-by-department__title">
    //               + em até 10x sem juros
    //             </span>

    //             <span className="promotions-by-department__check">Confira!</span>
    //             <span className="promotions-by-department__check-rules">
    //               *Confira as regras
    //             </span>
    //           </div>

    //           <img
    //             className="promotions-by-department__product-image"
    //             src="images/promotions-by-department-products/samsung_tv.jpg"
    //           />
    //         </div>
    //       </div>
    //     );
    //   }

    //   return promotionsContainers;
    // }

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "promotions-by-department" },
        this.createMainPromotionsRow(this.props.data.promotions_by_department),
        React.createElement(
          "div",
          { className: "promotions-by-department__container promotions-by-department__container--small" },
          React.createElement(
            "div",
            { className: "promotions-by-department__card promotions-by-department__card--small" },
            React.createElement(
              "div",
              { className: "promotions-by-department__small-image-container" },
              React.createElement("img", {
                className: "promotions-by-department__product-image--small",
                src: "images/promotions-by-department-products/impressora.png"
              })
            ),
            React.createElement(
              "div",
              { className: "promotions-by-department__text promotions-by-department__text--small" },
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                "Info acess com at\xE9"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__discount" },
                "20% OFF"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                " \xE0 vista "
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check" },
                "Confira!"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check-rules" },
                "*Confira as regras"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "promotions-by-department__container promotions-by-department__container--small" },
          React.createElement(
            "div",
            { className: "promotions-by-department__card promotions-by-department__card--small" },
            React.createElement(
              "div",
              { className: "promotions-by-department__small-image-container promotions-by-department__small-image-container" },
              React.createElement("img", {
                className: "promotions-by-department__product-image--small",
                src: "images/promotions-by-department-products/celular.png"
              })
            ),
            React.createElement(
              "div",
              { className: "promotions-by-department__text promotions-by-department__text-small" },
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                "Smartphones com at\xE9"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__discount" },
                "at\xE9 10% OFF"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                " \xE0 vista "
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check" },
                "Quero!"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check-rules" },
                "*Confira as regras"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "promotions-by-department__container promotions-by-department__container--small" },
          React.createElement(
            "div",
            { className: "promotions-by-department__card promotions-by-department__card--small" },
            React.createElement(
              "div",
              { className: "promotions-by-department__small-image-container promotions-by-department__small-image-container--blue" },
              React.createElement("img", {
                className: "promotions-by-department__product-image--small",
                src: "images/promotions-by-department-products/ventilador.png"
              })
            ),
            React.createElement(
              "div",
              { className: "promotions-by-department__text promotions-by-department__text-small" },
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                "Ar e ventila\xE7\xE3o com at\xE9"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__discount" },
                "AT\xC9 10% OFF"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check" },
                "Preciso!"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check-rules" },
                "*Confira as regras"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "promotions-by-department__container promotions-by-department__container--small" },
          React.createElement(
            "div",
            { className: "promotions-by-department__card promotions-by-department__card--small" },
            React.createElement(
              "div",
              { className: "promotions-by-department__small-image-container promotions-by-department__small-image-container--light-blue" },
              React.createElement("img", {
                className: "promotions-by-department__product-image--small",
                src: "images/promotions-by-department-products/livro.jpeg"
              })
            ),
            React.createElement(
              "div",
              { className: "promotions-by-department__text promotions-by-department__text-small" },
              React.createElement(
                "span",
                { className: "promotions-by-department__title" },
                "Clubinho do Livro Submarino"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check" },
                "Participe!"
              ),
              React.createElement(
                "span",
                { className: "promotions-by-department__check-rules" },
                "*Confira as regras"
              )
            )
          )
        )
      );
    }
  }]);

  return PromotionsByDepartment;
}(React.Component);

function fetchPromotionsByDepartment() {
  var response = fetch("./json_files/promotions_by_department.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    root.render(React.createElement(
      "div",
      null,
      React.createElement(Navbar, null),
      React.createElement(
        "div",
        { className: "main-content" },
        React.createElement(
          "div",
          { className: "main-content__container" },
          React.createElement(Banner, null),
          React.createElement(PromotionsByDepartment, { data: data })
        )
      )
    ));
  });

  return response;
}

var domContainer = document.querySelector("#react-root");
var root = ReactDOM.createRoot(domContainer);

fetchPromotionsByDepartment();