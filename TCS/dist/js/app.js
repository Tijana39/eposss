 $(document).ready(function() {
    // init lazy loading
    let blazy = new Blazy({
        selector: '.lazyload',
    });

    // init validator plugin
    $('#form').validate();

    // init isotope
    let $grid = $('.products__product-list').isotope({
        // options
        itemSelector: '.products__product-wrapper',
    });

    // filter logic
    $('.products__filter').click(function() {
        $grid.isotope({
            filter: `${'.' + $(this).data('filter')}`,
        });
    });

    $('button[data-toggle="toggle"]').click(function() {
        $(`${$(this).data('target')}`).toggleClass('active');
    });
});
