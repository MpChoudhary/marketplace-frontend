import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Compare.css';

class Compare extends Component {
  state = {
    accessories: [],
    air_flow: [],
    application: [],
    email: [],
    fan_speed: [],
    fan_sweep_diameter: [],
    firm: [],
    global: [],
    height: [],
    manufacturer: [],
    manufacturer_department: [],
    manufacturer_email: [],
    manufacturer_phone: [],
    manufacturer_web: [],
    model: [],
    model_year: [],
    mounting_location: [],
    name: [],
    numbers_of_fan_speed: [],
    phone: [],
    power: [],
    series: [],
    sound_at_max_speed: [],
    use_type: [],
    voltage: [],
    web: [],
    weight: [],
    empty_cells: []
  };

  componentWillMount() {
    const details = [
      'accessories',
      'air_flow',
      'application',
      'email',
      'fan_speed',
      'fan_sweep_diameter',
      'firm',
      'global',
      'height',
      'manufacturer',
      'manufacturer_department',
      'manufacturer_email',
      'manufacturer_phone',
      'manufacturer_web',
      'model',
      'model_year',
      'mounting_location',
      'name',
      'numbers_of_fan_speed',
      'phone',
      'power',
      'series',
      'sound_at_max_speed',
      'use_type',
      'voltage',
      'web',
      'weight'
    ];

    for (let detail of details) {
      let productDetail = this.props.products.map(product => {
        return <td key={product.id}>{product[detail]}</td>;
      });

      this.setState({
        [detail]: productDetail
      });
    }
    this.getEmptyCells();
  }

  getEmptyCells = () => {
    let empty = [];
    for (let idx in this.props.products) {
      empty.push(<td key={idx}></td>);
    }
    this.setState({
      empty_cells: empty
    });
  };

  thousandFormatter = elements => {
    let dataList = [];
    for (let element of elements) {
      dataList.push(
        <td key={element.key}>
          {parseInt(element.props.children).toLocaleString()}
        </td>
      );
    }
    return dataList;
  };

  arrayHandler = arr => {
    return arr
      .replace('[', '')
      .replace(']', '')
      .split(',');
  };

  minMaxHandler = arr => {
    let list = [];
    for (let element of arr) {
      list.push(
        <td key={element.key} className="p-0">
          <div className="row no-gutters">
            <div className="col min">Min</div>
            <div className="col">
              {this.arrayHandler(element.props.children)[0]}
            </div>
            <div className="col max">Max</div>
            <div className="col">
              {this.arrayHandler(element.props.children)[1]}
            </div>
          </div>
        </td>
      );
    }
    return list;
  };

  render() {
    const img_size = {
      width: '310px',
      height: '210px'
    };

    let headerImages = this.props.products.map(product => {
      return (
        <th className="text-center" key={product.id}>
          <div className="row no-gutters pt-2 px-1">
            <div className="col text-left">
              <button className="add-to-btn input-container">Add to</button>
            </div>
            <div className="col text-right">
              <p className="small">Verified 09/09/2019</p>
            </div>
          </div>
          <img
            src={product['image_url']}
            alt="Product image"
            style={img_size}
          />
        </th>
      );
    });

    return (
      <div className="compare-bg">
        {/* Breadcrumb */}
        <div>
          <p className="font-weight-bold mb-2 pt-2 pl-3">
            <span className="header-color">
              Mechanical > {this.props.searchItem} >
            </span>
            <span className="text-secondary"> Compare</span>
          </p>
        </div>

        {/* Compare Table */}
        <table className="compare-table ml-4 mb-5">
          <thead>
            <tr>
              <th></th>
              {headerImages}
            </tr>
          </thead>
          <tbody>
            {/* Description */}
            <tr>
              <td>DESCRIPTION</td>
              {this.state.empty_cells}
            </tr>
            <tr>
              <td>Manufacturer</td>
              {this.state.manufacturer}
            </tr>
            <tr>
              <td>Series</td>
              {this.state.series}
            </tr>
            <tr>
              <td>Model</td>
              {this.state.model}
            </tr>

            {/* Type */}
            <tr>
              <td>TYPE</td>
              {this.state.empty_cells}
            </tr>
            <tr>
              <td>Use Type</td>
              {this.state.use_type}
            </tr>
            <tr>
              <td>Application</td>
              {this.state.application}
            </tr>
            <tr>
              <td>Mounting Location</td>
              {this.state.mounting_location}
            </tr>
            <tr>
              <td>Accessories</td>
              {this.state.accessories}
            </tr>
            <tr>
              <td>Model year</td>
              {this.state.model_year}
            </tr>

            {/* Technical specification */}
            <tr>
              <td>TECHNICAL SPECIFICATIONS</td>
              {this.state.empty_cells}
            </tr>
            <tr>
              <td>Airflow(CFM)</td>
              {this.thousandFormatter(this.state.air_flow)}
            </tr>
            <tr>
              <td>Power(W)</td>
              {this.minMaxHandler(this.state.power)}
            </tr>
            <tr>
              <td>Operating voltage(VAC)</td>
              {this.minMaxHandler(this.state.voltage)}
            </tr>
            <tr>
              <td>Fan speed(RPM)</td>
              {this.minMaxHandler(this.state.fan_speed)}
            </tr>
            <tr>
              <td>Number of fan speeds</td>
              {this.state.numbers_of_fan_speed}
            </tr>
            <tr>
              <td>Sound at max speed (dBA)</td>
              {this.state.sound_at_max_speed}
            </tr>
            <tr>
              <td>Fan sweep diameter (in)</td>
              {this.state.fan_sweep_diameter}
            </tr>
            <tr>
              <td>Height (in)</td>
              {this.minMaxHandler(this.state.height)}
            </tr>
            <tr>
              <td>Weight (lbs)</td>
              {this.state.weight}
            </tr>

            {/* Past specification */}
            <tr>
              <td>PAST SPECIFICATIONS</td>
              {this.state.empty_cells}
            </tr>
            <tr>
              <td>Firm</td>
              {this.state.firm}
            </tr>
            <tr>
              <td>Global</td>
              {this.thousandFormatter(this.state.global)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.compare.products,
    searchItem: state.search.searchField
  };
};

export default connect(
  mapStateToProps,
  null
)(Compare);
