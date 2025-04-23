import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Miami coordinates
const center = {
  lat: 25.7617,
  lng: -80.1918
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '' // You would add your API key here in a real application
  });
  
  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);
  
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e9e9e9'
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5'
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#ffffff'
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#ffffff'
              },
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff'
              },
              {
                lightness: 18
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff'
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5'
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dedede'
              },
              {
                lightness: 21
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on'
              },
              {
                color: '#ffffff'
              },
              {
                lightness: 16
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                saturation: 36
              },
              {
                color: '#333333'
              },
              {
                lightness: 40
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f2f2f2'
              },
              {
                lightness: 19
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#fefefe'
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#fefefe'
              },
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          }
        ]
      }}
    >
      <Marker
        position={center}
        icon={{
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMEMxMS4wMjE4IDAgNy4yMDY0NCAxLjU4MDM1IDQuMzkzNCA0LjM5MzRDMS41ODAzNSA3LjIwNjQ0IDAgMTEuMDIxOCAwIDE1QzAgMTguMTg3NSAwLjk2ODc1IDIxLjEyNSAyLjgxMjUgMjMuNDM3NUwxNC4wNjI1IDM5LjA2MjVDMTQuMTg3NSAzOS4yMTg4IDE0LjM0MzggMzkuMzQzOCAxNC41MzEyIDM5LjQzNzVDMTQuNzE4OCAzOS41MzEyIDE0LjkwNjIgMzkuNTkzOCAxNS4wOTM4IDM5LjU5MzhDMTUuMjgxMiAzOS41OTM4IDE1LjQ2ODggMzkuNTMxMiAxNS42NTYyIDM5LjQzNzVDMTUuODQzOCAzOS4zNDM4IDE2IDM5LjIxODggMTYuMTI1IDM5LjA2MjVMMjcuMTg3NSAyMy40Mzc1QzI5LjAzMTIgMjEuMTI1IDMwIDE4LjE4NzUgMzAgMTVDMzAgMTEuMDIxOCAyOC40MTk2IDcuMjA2NDQgMjUuNjA2NiA0LjM5MzRDMjIuNzkzNiAxLjU4MDM1IDE4Ljk3ODIgMCAxNSAwWk0xNSAyMC42MjVDMTMuNTU0NyAyMC42MjUgMTIuMTQ0MyAyMC4xNTc0IDEwLjk3MjIgMTkuMjgwNUM5LjgwMDAxIDE4LjQwMzcgOC45MjE1OCAxNy4xNjg2IDguNDYyOTcgMTUuNzQ2NkM4LjAwNDM2IDE0LjMyNDYgNy45ODk0NCAxMi43ODM1IDguNDIwNDUgMTEuMzUxOUM4Ljg1MTQ2IDkuOTIwMzQgOS43MDc0NiA4LjY2NTk0IDEwLjg2MSA3Ljc2MzkyQzEyLjAxNDYgNi44NjE5IDEzLjQxMjggNi4zNjcxOSAxNC44NTc1IDYuMzQyNDJDMTYuMzAyMiA2LjMxNzY1IDE3LjcxNTYgNi43NjQxNiAxOC44OTc1IDcuNjI2MjVDMjAuMDc5NCA4LjQ4ODM0IDIwLjk3MjggOS43MTM3NiAyMS40NDY2IDExLjEzMDRDMjEuOTIwNCAxMi41NDcgMjEuOTUxNiAxNC4wODYzIDIxLjUzNTQgMTUuNTIxNEMyMS4xMTkzIDE2Ljk1NjQgMjAuMjc3MSAxOC4yMTU0IDE5LjEzMTIgMTkuMTIxOUMxNy45ODU0IDIwLjAyODQgMTYuNTEzNiAyMC41MzEzIDE1IDIwLjYyNVoiIGZpbGw9IiMwMDc3QjYiLz48L3N2Zz4=',
          scaledSize: new window.google.maps.Size(30, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 40)
        }}
        onClick={() => setInfoWindowOpen(true)}
      />
      
      {infoWindowOpen && (
        <InfoWindow
          position={center}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <InfoContent>
            <h3>OceanVoyager Cruises</h3>
            <p>123 Ocean Drive, Miami, FL 33139</p>
            <p>+1 (305) 555-7890</p>
          </InfoContent>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <MapPlaceholder>
      <FaMapMarkerAlt />
      <p>Loading Map...</p>
    </MapPlaceholder>
  );
};

const InfoContent = styled.div`
  padding: 5px;
  
  h3 {
    font-size: 1rem;
    color: var(--primary-dark);
    margin-bottom: 5px;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--gray);
    margin-bottom: 3px;
  }
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray);
  
  svg {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

export default Map;
