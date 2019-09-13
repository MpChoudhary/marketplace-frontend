import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Product from '../../components/Product/Product';
import SideBar from '../../components/UI/SideBar/SideBar';
import { compare } from '../../store/actions/compare';

import './Products.css';

class Products extends React.Component {
  state = {
    compareProducts: []
  };

  compare = (product, checked) => {
    let products = [...this.state.compareProducts];
    if (checked) {
      products.push(product);
    } else {
      for (let [index, p] of products.entries()) {
        if (p.id === product.id) {
          products.splice(index, 1);
          break;
        }
      }
    }
    this.setState({
      compareProducts: products
    });
    this.props.compare(products);
  };

  render() {
    let compareBtn;
    if (this.state.compareProducts.length > 1) {
      let path = this.props.match.url + '/compare';
      compareBtn = (
        <NavLink to={path} className="compare-btn">
          Compare
        </NavLink>
      );
    }

    const { details } = this.props;

    const productList = details.map(productDetail => (
      <Product
        key={productDetail.id}
        history={this.props.history}
        match={this.props.match}
        compare={this.compare}
        details={productDetail}
      />
    ));

    return (
      <div className="new-bg" style={{ borderTop: '1px solid grey' }}>
        <div className="row">
          <div
            className="col-3"
            style={{ border: '1px solid grey', height: '79vh' }}
          >
            <SideBar />
          </div>
          <div className="col-9" style={{}}>
            <div style={{ float: 'left' }}>
              <p
                className="font-weight-bold mt-2 mb-0 ml-4 text-secondary"
                style={{ float: 'left' }}
              >
                <span className="active-breadcrum">
                  Mechanical <span className="mx-2">></span>{' '}
                </span>
                {this.props.searchItem}
              </p>
            </div>
            <div
              style={{
                clear: 'both',
                cursor: 'pointer',
                margin: '10px',
                textAlign: 'center',
                transition: '0.15s all'
              }}
            >
              {productList}
            </div>
          </div>
        </div>
        <div className="text-right px-5 pb-3">{compareBtn}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  for (let i in state.categories.categories) {
    if (state.categories.categories[i].name === state.search.searchField) {
      return {
        details: state.categories.categories[i].products,
        searchItem: state.search.searchField
      };
    }
  }
};

const mapStateToDispatch = dispatch => {
  return {
    compare: products => dispatch(compare(products))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Products);
