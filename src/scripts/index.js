import "bootstrap";
import "../styles/index.scss";

/*<![CDATA[*/

(function() {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {

    var client = ShopifyBuy.buildClient({
      domain: "clemson-sports-memorabilia.myshopify.com",
      storefrontAccessToken: "62602b8890f27c99b27859bd4edda981"
    });

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent("product", {
        id: [4106872356957],
        node: document.getElementById("product-component-6d175023cad"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "checkout",
            variantId: "all",
            width: "220px",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              price: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            text: {
              button: "Buy the Ball - $379"
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              price: {
                "color": "#fff",
                "font-size": "18px",
                "font-weight": "700"
              },
              button: {
                "background-color": "#dda51c",
                "color": "#fff",
                "font-family": "Avant Garde, sans-serif",
                "padding-left": "20px",
                "padding-right": "20px",
                "font-size": "20px",
                ":hover": {
                  "color": "#fff",
                  "background-color": "#C08E19"
                },
                ":focus": {
                  "background-color": "#C08E19"
                },
                "font-weight": "bolder",
                "letter-spacing": "-.2px",
              },
              compareAt: {
                "font-size": "12px"
              }
            }
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              button: {
                "background-color": "#d0a338",
                "font-family": "Avant Garde, sans-serif",
                ":hover": {
                  "background-color": "#dda51c"
                },
                ":focus": {
                  "background-color": "#dda51c"
                },
                "font-weight": "normal"
              },
              footer: {
                "background-color": "#ffffff"
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              button: {
                "background-color": "#d0a338",
                "font-family": "Avant Garde, sans-serif",
                "padding-left": "20px",
                "padding-right": "20px",
                ":hover": {
                  "background-color": "#dda51c"
                },
                ":focus": {
                  "background-color": "#dda51c"
                },
                "font-weight": "normal"
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Avant Garde, sans-serif",
                "background-color": "#d0a338",
                ":hover": {
                  "background-color": "#dda51c"
                },
                ":focus": {
                  "background-color": "#dda51c"
                },
                "font-weight": "normal"
              }
            }
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();
/*]]>*/