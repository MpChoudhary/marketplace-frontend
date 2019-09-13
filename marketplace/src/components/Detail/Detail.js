import React from 'react';
import { connect } from 'react-redux';

import './Detail.css';

function Detail(props) {
  const img_size = {
      width: '70px',
      height: '60px',
      float: 'left'
    },
    product_header = {
      float: 'right'
    },
    header_height = {
      height: '60px'
    };

  const thousandFormatter = value => {
    return parseInt(value).toLocaleString();
  };

  const arrayHandler = arr => {
    return arr
      .replace('[', '')
      .replace(']', '')
      .split(',');
  };

  const productDetails = arrayHandler(props.product.details).map(
    (detail, index) => {
      return (
        <tr key={index}>
          <td>{detail}</td>
        </tr>
      );
    }
  );

  return (
    <div className="new-bg">
      <div className="btm-border">
        <p className="font-weight-bold mb-0 pt-2 pl-3">
          <span className="header-color">
            Mechanical > {props.searchItem} >
          </span>
          <span className="text-secondary"> {props.product.model}</span>
        </p>
      </div>

      <div className="row px-3" style={header_height}>
        <div className="col-4 px-0">
          <img
            src={props.product['image_url']}
            alt="Product Image"
            style={img_size}
          />
          <h6
            style={product_header}
            className="font-weight-bold vertical-align header-color"
          >
            {props.product.manufacturer} / {props.product.series} /{' '}
            {props.product.model}
          </h6>
        </div>
        <div className="col-3 text-danger vertical-align">
          <p className="small">
            Past specifications: {props.product.firm} firm /{' '}
            {parseInt(props.product.global).toLocaleString()} global
          </p>
        </div>
        <div className="col-5 text-right">
          <button className="add-to-btn input-container mr-2 mt-2">
            Add to
          </button>
        </div>
      </div>

      <div>
        <nav className="nav-bg">
          <li className="product-nav-item">Product Summary</li>
          <li className="product-nav-item">Product Details</li>
          <li className="product-nav-item">Contact</li>
        </nav>

        <div className="product-content px-2">
          {/* Product Summary */}
          <div className="px-2">
            <h5 className="header-color pt-3">Product Summary</h5>
            <div className="row no-gutters">
              <div className="col">
                <table className="summary-table">
                  {/* Description */}
                  <thead>
                    <tr>
                      <th>DESCRIPTION</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Manufacturer</td>
                      <td>{props.product.manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Series</td>
                      <td>{props.product.series}</td>
                    </tr>
                    <tr>
                      <td>Model</td>
                      <td>{props.product.model}</td>
                    </tr>
                  </tbody>

                  {/* Type */}
                  <thead>
                    <tr>
                      <th>TYPE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Use Type</td>
                      <td>{props.product['use_type']}</td>
                    </tr>
                    <tr>
                      <td>Application</td>
                      <td>{props.product.application}</td>
                    </tr>
                    <tr>
                      <td>Mounting Location</td>
                      <td>{props.product['mounting_location']}</td>
                    </tr>
                    <tr>
                      <td>Accessories</td>
                      <td>{props.product.accessories}</td>
                    </tr>
                    <tr>
                      <td>Model year</td>
                      <td>{props.product['model_year']}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col ml-3">
                <table className="summary-table">
                  {/* Technical Specifications */}
                  <thead>
                    <tr>
                      <th>TECHNICAL SPECIFICATIONS</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Airflow(CFM)</td>
                      <td>{thousandFormatter(props.product['air_flow'])}</td>
                    </tr>
                    <tr>
                      <td>Power(W)</td>
                      <td className="p-0">
                        <div className="row">
                          <div className="col min-max-bg text-center">Min</div>
                          <div className="col text-center">
                            {arrayHandler(props.product.power)[0]}
                          </div>
                          <div className="col min-max-bg text-center">Max</div>
                          <div className="col">
                            {arrayHandler(props.product.power)[1]}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Operating voltage(VAC)</td>
                      <td className="p-0">
                        <div className="row">
                          <div className="col min-max-bg text-center">Min</div>
                          <div className="col text-center">
                            {arrayHandler(props.product.voltage)[0]}
                          </div>
                          <div className="col min-max-bg text-center">Max</div>
                          <div className="col">
                            {arrayHandler(props.product.voltage)[1]}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Fan speed(RPM)</td>
                      <td className="p-0">
                        <div className="row">
                          <div className="col min-max-bg text-center">Min</div>
                          <div className="col text-center">
                            {arrayHandler(props.product['fan_speed'])[0]}
                          </div>
                          <div className="col min-max-bg text-center">Max</div>
                          <div className="col">
                            {arrayHandler(props.product['fan_speed'])[1]}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Number of fan speeds</td>
                      <td>{props.product['numbers_of_fan_speed']}</td>
                    </tr>
                    <tr>
                      <td>Sound at max speed (dBA)</td>
                      <td>{props.product['sound_at_max_speed']}</td>
                    </tr>
                    <tr>
                      <td>Fan sweep diameter (in)</td>
                      <td>{props.product['fan_sweep_diameter']}</td>
                    </tr>
                    <tr>
                      <td>Height (in)</td>
                      <td className="p-0">
                        <div className="row">
                          <div className="col min-max-bg text-center">Min</div>
                          <div className="col text-center">
                            {arrayHandler(props.product.height)[0]}
                          </div>
                          <div className="col min-max-bg text-center">Max</div>
                          <div className="col">
                            {arrayHandler(props.product.height)[1]}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Weight (lbs)</td>
                      <td>{props.product.weight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="px-2">
            <h5 className="header-color pt-3">Product Details</h5>
            <table className="detail-table">
              <thead>
                <tr>
                  <th>SERIES INFORMATION</th>
                </tr>
              </thead>
              <tbody>{productDetails}</tbody>
            </table>
          </div>

          {/* Contact */}
          <div className="px-2 mb-4">
            <h5 className="header-color pt-3">Contact</h5>
            <div className="row">
              <div className="col">
                <table className="contact-table">
                  <thead>
                    <tr>
                      <th>SALES REPRESENTATIVE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{props.product.name}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{props.product.phone}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{props.product.email}</td>
                    </tr>
                    <tr>
                      <td>Web</td>
                      <td>
                        <a href={props.product.web}>{props.product.web}</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col">
                <table className="contact-table">
                  <thead>
                    <tr>
                      <th>Manufacturer</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Department</td>
                      <td>{props.product['manufacturer_department']}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{props.product['manufacturer_phone']}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{props.product['manufacturer_email']}</td>
                    </tr>
                    <tr>
                      <td>Web</td>
                      <td>
                        <a href={props.product['manufacturer_web']}>
                          {props.product['manufacturer_web']}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    product: state.product.detail,
    searchItem: state.search.searchField
  };
};

export default connect(
  mapStateToProps,
  null
)(Detail);
