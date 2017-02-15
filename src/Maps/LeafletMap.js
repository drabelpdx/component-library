import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { divIcon } from 'leaflet';
import classNames from 'classnames/bind';
import styles from './LeafletMap.styles.css';
import neighborhoodGeoJson from '../../assets/neighborhoodGeoJson.json';

const cx = classNames.bind(styles);
const classMap = cx({ mapSize: true });

const icon = divIcon({
  className: 'my-div-icon',
  iconSize: [30, 30],
});

function wrapMyComponent(WrappedComponent, GeoWrapper) {
  return class extends Component {
    static displayName = `GeoWrapper(<${WrappedComponent.displayName} />`;

    constructor(props) {
      super(props);
      this.state = {
        center: props.data.map.position,
        zoom: props.data.map.zoom,
        geoData: GeoWrapper,
        markers: props.data.markers,
      };
      this.clickHere = this.clickHere.bind(this);
    }

    clickHere = (e) => {
      console.log(e);
      e.target._icon.click();
    };

    render() {
      return (
        <WrappedComponent
          data={this.state.geoData}
          center={this.state.center}
          markers={this.state.markers}
          zoom={this.state.zoom}
          clickHere={this.clickHere}
        />
      );
    }
  };
}

const BareLeafletMap = (props) => {
  // const map = props.data.map;
  // const markers = props.data.markers;
  require('../../assets/leaflet.css');
  const markers = props.markers;
  const neighborhoods = markers.map(marker => (
    <Marker
      key={marker.neighborhood}
      position={marker.position}
      icon={icon}
      onmouseover={props.clickHere}
    >
      <Popup>
        <span>
          {marker.neighborhood} <br />
          {marker.popText}
        </span>
      </Popup>
    </Marker>
    ),
  );
  return (
    <Map
      className={classMap}
      center={props.center}
      maxBounds={props.maxBounds}
      zoom={props.zoom}
      minZoom={props.minZoom}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={props.data} onEachFeature={props.handleHover} />
      {neighborhoods}
    </Map>
  );
};
BareLeafletMap.displayName = 'BareLeafletMap';

BareLeafletMap.propTypes = {
  center: React.PropTypes.array,
  maxBounds: React.PropTypes.array,
  zoom: React.PropTypes.number,
  minZoom: React.PropTypes.number,
  markers: React.PropTypes.array,
};

const PDXLeafletMap = wrapMyComponent(
  BareLeafletMap,
  neighborhoodGeoJson,
);

export default PDXLeafletMap;
