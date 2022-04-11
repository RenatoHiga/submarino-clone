"use strict";

let promotionsByDepartment;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <section className="navbar__main-info">
          <div className="navbar__main-info-option">
            <img
              src="./images/logos/submarino-logo-1.png"
              width="224"
              height="36"
            />
          </div>

          <div className="navbar__search-input">
            <input
              className="navbar__input"
              placeholder="O que você tá procurando?"
            />
            <img
              src="./images/icons/navbar-search-input.svg"
              className="navbar__input-icon"
            />
          </div>

          <div className="navbar__my-profile">
            <img
              src="./images/icons/profile-icon.svg"
              width="45px"
              height="45px"
            />
            <p className="navbar__my-profile-label">Meu perfil</p>
          </div>

          <div className="navbar__main-info-option">
            <img src="./images/icons/heart.svg" width="30px" height="30px" />
          </div>

          <div className="navbar__main-info-option">
            <img src="./images/icons/cart.svg" width="30px" height="30px" />
          </div>
        </section>

        <ul className="navbar__departments">
          <li>
            <a className="navbar__departments-option" href="#">
              Vem ver as lojas
            </a>
          </li>

          <li>
            <a className="navbar__departments-option" href="#">
              Baixe o APP
            </a>
          </li>

          <li>
            <a className="navbar__departments-option" href="#">
              Smartphones
            </a>
          </li>

          <li>
            <a className="navbar__departments-option" href="#">
              Informática
            </a>
          </li>

          <li>
            <a className="navbar__departments-option" href="#">
              Smart TVs
            </a>
          </li>

          <li>
            <a className="navbar__departments-option" href="#">
              Casa
            </a>
          </li>

          <li>
            <a className="navbar__departments-option" href="#">
              Livros
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="banner">
        <div className="banner__button banner__button--left">
          <img
            src="images/icons/banner-button.svg"
            className="banner__button-image banner__button-image--left"
          />
        </div>

        <img
          className="banner__image"
          src="images/banners/main-banners/banner1.webp"
        />

        <div className="banner__button banner__button--right">
          <img
            src="images/icons/banner-button.svg"
            className="banner__button-image"
          />
        </div>
      </div>
    );
  }
}

class PromotionsByDepartment extends React.Component {
  constructor(props) {
    super(props);
  }

  createMainPromotionsRow(promotions) {
    let mainPromotionsRow = [];

    // promotions = [promotions[2]];

    console.log(promotions, "this is promotions");

    mainPromotionsRow = promotions.map((promotion) => {
      console.log(promotion);

      let isImagePortrait = promotion.image_orientation === "portrait";
      let imageOrientationClasses;

      if (isImagePortrait) {
        imageOrientationClasses = "promotions-by-department__product-image";
      } else {
        imageOrientationClasses =
          "promotions-by-department__product-image promotions-by-department__product-image--portrait";
      }

      let card = (
        <div className="promotions-by-department__container">
          <span className="promotions-by-department__name">
            {promotion.department_name}
            <span className="promotions-by-department__name-underline"></span>
          </span>

          <div className="promotions-by-department__card">
            <div className="promotions-by-department__text">
              <span className="promotions-by-department__title">
                {promotion.first_card_title}
              </span>

              <span className="promotions-by-department__discount">
                {promotion.discount_title}
              </span>

              <span className="promotions-by-department__title">
                {promotion.second_card_title}
              </span>

              <span className="promotions-by-department__check">
                {promotion.check_label}
              </span>
              <span className="promotions-by-department__check-rules">
                *Confira as regras
              </span>
            </div>

            <img className={imageOrientationClasses} src={promotion.image} />
          </div>
        </div>
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

  render() {
    return (
      <section className="promotions-by-department">
        {this.createMainPromotionsRow(this.props.data.promotions_by_department)}

        <div className="promotions-by-department__container promotions-by-department__container--small">
          <div className="promotions-by-department__card promotions-by-department__card--small">
            <div className="promotions-by-department__small-image-container">
              <img
                className="promotions-by-department__product-image--small"
                src="images/promotions-by-department-products/impressora.png"
              />
            </div>

            <div className="promotions-by-department__text promotions-by-department__text--small">
              <span className="promotions-by-department__title">
                Info acess com até
              </span>

              <span className="promotions-by-department__discount">
                20% OFF
              </span>

              <span className="promotions-by-department__title"> à vista </span>

              <span className="promotions-by-department__check">Confira!</span>
              <span className="promotions-by-department__check-rules">
                *Confira as regras
              </span>
            </div>
          </div>
        </div>
        <div className="promotions-by-department__container promotions-by-department__container--small">
          <div className="promotions-by-department__card promotions-by-department__card--small">
            <div className="promotions-by-department__small-image-container promotions-by-department__small-image-container">
              <img
                className="promotions-by-department__product-image--small"
                src="images/promotions-by-department-products/celular.png"
              />
            </div>

            <div className="promotions-by-department__text promotions-by-department__text-small">
              <span className="promotions-by-department__title">
                Smartphones com até
              </span>

              <span className="promotions-by-department__discount">
                até 10% OFF
              </span>

              <span className="promotions-by-department__title"> à vista </span>

              <span className="promotions-by-department__check">Quero!</span>
              <span className="promotions-by-department__check-rules">
                *Confira as regras
              </span>
            </div>
          </div>
        </div>
        <div className="promotions-by-department__container promotions-by-department__container--small">
          <div className="promotions-by-department__card promotions-by-department__card--small">
            <div className="promotions-by-department__small-image-container promotions-by-department__small-image-container--blue">
              <img
                className="promotions-by-department__product-image--small"
                src="images/promotions-by-department-products/ventilador.png"
              />
            </div>

            <div className="promotions-by-department__text promotions-by-department__text-small">
              <span className="promotions-by-department__title">
                Ar e ventilação com até
              </span>

              <span className="promotions-by-department__discount">
                ATÉ 10% OFF
              </span>

              <span className="promotions-by-department__check">Preciso!</span>
              <span className="promotions-by-department__check-rules">
                *Confira as regras
              </span>
            </div>
          </div>
        </div>
        <div className="promotions-by-department__container promotions-by-department__container--small">
          <div className="promotions-by-department__card promotions-by-department__card--small">
            <div className="promotions-by-department__small-image-container promotions-by-department__small-image-container--light-blue">
              <img
                className="promotions-by-department__product-image--small"
                src="images/promotions-by-department-products/livro.jpeg"
              />
            </div>

            <div className="promotions-by-department__text promotions-by-department__text-small">
              <span className="promotions-by-department__title">
                Clubinho do Livro Submarino
              </span>

              <span className="promotions-by-department__check">
                Participe!
              </span>
              <span className="promotions-by-department__check-rules">
                *Confira as regras
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function fetchPromotionsByDepartment() {
  const response = fetch("./json_files/promotions_by_department.json")
    .then((response) => response.json())
    .then((data) => {
      root.render(
        <div>
          <Navbar />

          <div className="main-content">
            <div className="main-content__container">
              <Banner />

              <PromotionsByDepartment data={data} />
            </div>
          </div>
        </div>
      );
    });

  return response;
}

const domContainer = document.querySelector("#react-root");
const root = ReactDOM.createRoot(domContainer);

fetchPromotionsByDepartment();
