import React from 'react';

import { connect } from 'react-redux';
import { set } from '../../store/actions/product';
import { withRouter } from 'react-router-dom';

import './Product.css';

function Product(props) {
  const img_size = {
      width: '99%%',
      height: '170px'
    },
    info_bg = {
      background: '#f2f2f2'
    },
    max_voltage = props.details.power
      .replace('[', '')
      .replace(']', '')
      .split(','),
    air_flow =
      props.details['air_flow'].substring(0, 1) +
      ',' +
      props.details['air_flow'].substring(1);

  const handleClick = () => {
    props.history.push(props.match.url + '/' + props.details.id);
    props.set(props.details);
  };

  const handleChange = event => {
    if (event.target.checked) {
      props.compare(props.details, true);
    } else {
      props.compare(props.details, false);
    }
  };

  return (
    <div
      style={{
        border: '1px solid grey',
        float: 'left',
        marginLeft: '1%',
        marginTop: '2%',
        width: '22%'
      }}
    >
      <div onClick={handleClick}>
        <img
          src={props.details['image_url']}
          alt="Product image"
          style={img_size}
        />
        <h6>{props.details.manufacturer}</h6>
        <h6>{props.details.series}</h6>
        <h6>{props.details.model}</h6>
        <div style={info_bg}>
          <p className="mb-0">{air_flow} CFM</p>
          <p className="mb-0">{max_voltage[1]} W at max speed</p>
          <p className="mb-0">
            {props.details['sound_at_max_speed']} dBA at max speed
          </p>
          <p className="mb-0">
            {props.details['fan_speed_diameter']} fan sweep diameter
          </p>
        </div>
        <p className="mb-0 text-danger">Past specifications:</p>
        <p className="mb-0 text-danger">
          {props.details.firm} firm / {props.details.global} global
        </p>
      </div>
      <div className="row my-2">
        <div className="col">
          <input
            type="checkbox"
            className="mr-2"
            onChange={handleChange}
            value={props.details}
          />
          <span className="checkbox-lbl text-secondary">Compare</span>
        </div>
        <div style={{ paddingRight: '20px' }}>
          <button className="add-to-btn input-container mr-0">Add to</button>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    set: product => dispatch(set(product))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Product)
);
