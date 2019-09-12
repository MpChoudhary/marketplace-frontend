import React from 'react';

import { connect } from 'react-redux';
import { set, fail } from '../../store/actions/product';
import { Redirect, withRouter } from 'react-router-dom';

import './Product.css';

function Product(props) {
  console.log(props.details);
  console.log(props.history);
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
    // let url = '/products/'+props.details.id;
    // <Redirect to= url />

    // if (true) {
    //   redirect = <Redirect to="products/detail" />;
    // }
    // console.log(props.details);
    props.set(props.details);
  };

  const handleChange = event => {
    console.log(event.target.checked);
    if (event.target.checked) {
      props.compare(props.details, true);
    } else {
      props.compare(props.details, false);
    }
  };

  return (
    <div
      // className="grow shadow-5"
      // {...redirect}
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
          <button className="add-to-btn input-container mr-0">
            Add to
            <div className="arrow-down" id="input-arrow" />
          </button>
        </div>
      </div>
      {/* <img src={props.details.image_url} alt="image" />
      <div className="desc">
        <p>{props.details.manufacter}</p>
        <p>{props.details.series}</p>
        <p>{props.details.model}</p>
      </div>
      <div className="specs">
        <p>{props.details.air_flow}</p>
        <p>{props.details.numbers_of_fan_speed}</p>
        <p>{props.details.sound_at_max_speed}</p>
        <p>{props.details.fan_sweep_diameter}</p>
      </div>
      <div className="specs">
        <p>Past specification</p>
        <p>{props.details.firm}</p>
        <p>{props.details.global}</p>
      </div> */}
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

/** Details object:
 
accessories: "with water spray"
air_flow: "90"
application: "easy"
details: "['google has always been great in creating fans', 'These strings are not padded with blanks, so a VARCHAR(120) column consists of a maximum of 120 single-byte characters', 'If you use the VARCHAR data type without a length specifier, the default length is 256.','An NCHAR column without a length specification is converted to a CHAR(1) column.','An NVARCHAR column without a length specification is converted to a VARCHAR(256) column.','You can create an Amazon Redshift table with a TEXT column, but it is converted to a VARCHAR(256) column that accepts variable-length values with a maximum of 256 characters.','You can create an Amazon Redshift column with a BPCHAR (blank-padded character) type, which Amazon Redshift converts to a fixed-length CHAR(256) column.','Both CHAR and VARCHAR data types store strings up to n bytes in length. ','An attempt to store a longer string into a column of these types results in an error, unless the extra characters are all spaces (blanks), in which case the string is truncated to the maximum length.',' If the string is shorter than the maximum length, CHAR values are padded with blanks, but VARCHAR values store the string without blanks.']"
email: "larry@bird.com"
fan_speed: "[40,190]"
fan_sweep_diameter: "25"
firm: "9"
global: "3912"
height: "[10,40]"
id: 2
image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYVx8pNBstnQt-So1l6YsA0lUm60rl4zc29Q9o6iqwSboiqBCgw"
manufacturer: "google"
manufacturer_department: "legend"
manufacturer_email: "homo@deus.com"
manufacturer_phone: "+999"
manufacturer_web: "https://www.believe.com"
model: "Aviation series "
model_year: "2008"
mounting_location: "anywhere not harmful"
name: "larry bird"
numbers_of_fan_speed: "5"
phone: "+1237569321"
power: "[3.8,90]"
series: "google search 1.359"
sound_at_max_speed: "91"
use_type: "outdoor"
voltage: "[90,500]"
web: "https://www.google.com"
weight: "15"
*/
