(() => {
    function useIsotope(event) {

        // init Isotope
        let isotopeGrid = new Isotope( '.ba-works', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: 100
            }
        });
        // init Isotope with jQuery
        /*let isotopeGrid = $( '.ba-works').isotope({
            itemSelector: '.ba-grid-item',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.ba-sizer'
            }
        });*/

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            // let filterValue = event.target.dataset.filter;
            // use matching filter function
            isotopeGrid.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {
            event.preventDefault();

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.ba-active');
            if (activeBtn) {
                activeBtn.classList.remove('ba-active');
            }
            this.classList.add('ba-active');
        };

        document.querySelectorAll('.ba-filter-btn').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });


        let activeBtn = document.querySelector('.ba-active');

        applyFilterFromLink(activeBtn);
    }

    document.addEventListener('DOMContentLoaded', useIsotope);
})();



// function initMap() {
//     var uluru = {lat: -25.363, lng: 131.044};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: uluru
//     });
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
// }





// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 10,
//             center: {lat: 55, lng: 1105}
//         });
//
//
//         var beachMarker = new google.maps.Marker({
//             position: {lat: 52.3265115, lng: 4.9203},
//             map: map,
//             icon:  {
//                 url: "img/bbb.png",
//                 scaledSize: new google.maps.Size(32, 42)
//             }
//         });
//     }









//--------------------------------------------MAP
;(function () {
    window.onload = function () {
        var map,
            point = {lat: 48.734294, lng: 37.579304},
            iv1Content = document.querySelector('.info-window');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });

            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: {
                url: "img/bbb.png",
                scaledSize: new google.maps.Size(32, 42)
            }
            });

            var infowindow = new google.maps.InfoWindow({
                content: iv1Content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
                iv1Content.style.opacity = 1;
            });
        }
        initMap();
    }
})();


