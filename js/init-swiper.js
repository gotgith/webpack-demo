!function () {
    var view = View('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            // 是否无缝
            loop: true,
            // 是否需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 是否需要上下按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        }
    }
    controller.init(view)
}.call()