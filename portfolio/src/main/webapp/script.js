// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function getData() {
  fetch('/data').then(response => response.json()).then((data) => {
    const dataElement = document.getElementById('data-container');

    dataElement.innerHTML = ''; 
    data.map(createListElement)
        .forEach(element => dataElement.appendChild(element));
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function createMap() {
  var styledMapType = new google.maps.StyledMapType(
      [
        {
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#ebe3cd"
            }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#523735"
            }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#f5f1e6"
            }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#c9b2a6"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#dcd2be"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#ae9e90"
            }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#93817c"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#a5b076"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#447530"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f5f1e6"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#fdfcf8"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f8c967"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#e9bc62"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#e98d58"
            }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "color": "#db8555"
            }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#806b63"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#8f7d77"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#ebe3cd"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dfd2ae"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#b9d3c2"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#92998d"
            }
            ]
        }
      ],
      {name: 'Map'}
  )

  const map = new google.maps.Map(
      document.getElementById('map'),{
          center: {lat: 37.957, lng: -121.291}, 
          zoom: 14,
          mapTypeControlOptions: {
            mapTypeIds: ['satellite', 'hybrid', 'styled_map']
          }
       });

  map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

  var theatreMarker = new google.maps.Marker({position: {lat: 37.954852, lng: -121.290663}, map: map});
  var plazaMarker = new google.maps.Marker({position: {lat: 37.951898, lng: -121.291396}, map: map});
  var lincolnMarker = new google.maps.Marker({position: {lat: 38.010854, lng: -121.337971}, map: map});
  var uopMarker = new google.maps.Marker({position: {lat: 37.980154, lng: -121.312910}, map: map});
  var cocoroMarker = new google.maps.Marker({position: {lat: 37.971216, lng: -121.300347}, map: map});
  var davidsMarker = new google.maps.Marker({position: {lat: 38.020497, lng: -121.335163}, map: map});
} 
