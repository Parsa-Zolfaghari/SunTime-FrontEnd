export const createProductCard = product =>{
     const createHtmlOfBox = `
         <div class="last-products__box">
                                <p class="last-products__box-top--text">
                                   ${product.label?.name ?? "بدون برچسب"}
                                </p>

                                <img src="../../${product.images?.[0]?.image_url}" alt="G-shock"
                                    class="last-products__box-top--img" loading="lazy">

                                <p class="box-product__silver-text--brand">
                                    ${product.brand?.name ?? "بدون برند"}

                                </p>

                                <p class="box-product__silver-text--brand-des">
                                    ${product.description?? "بدون توضیحات"}
                                </p>
                                <div class="box-product__comments">
                                    <i class="fa-regular fa-star box-product__comments-star"></i>
                                    <span class="box-product__comments-number">
                                        4.5
                                    </span>
                                    <span class="box-product__comments-number--people">
                                        (63 نظر)
                                    </span>
                                </div>
                                <div class="box-product__price">
                                    <div class="box-price__container-prices">
                                        <div class="box-price__right-prices">
                                            <div class="box-price__org-price">
                                                <span class="box-price__org-price--text">
                                                    ${product.price?? "نامشخص"} تومان
                                                </span>
                                            </div>
                                            <div class="box-price__del-price">
                                                <del class="box-price__del-price--text">
                                                    19,000,000 تومان
                                                </del>
                                            </div>
                                        </div>
                                        <div class="box-price__left-prices">
                                            <div class="box-price__container-icons">
                                                <button class="box-price__btn-cart--shopping">
                                                    <i
                                                        class="fa-solid fa-cart-shopping box-price__icon-cart--shopping"></i>
                                                </button>
                                                <button class="box-price__btn-cart--heart">
                                                    <i class="fa-regular fa-heart box-price__icon-cart--heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        `;
        return createHtmlOfBox;
}                          
