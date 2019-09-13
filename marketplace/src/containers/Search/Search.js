import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Search.css';
import {
  setSearchField,
  requestCategories
} from '../../store/actions/category';
import Logo from '../Logo.png';

class Search extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    console.log(this.props.stateCategories);
    this.props.onRequestCategories();
  }

  submitHandler = event => {
    event.preventDefault();
    const { searchItem, stateCategories } = this.props;

    stateCategories.map(category => {
      if (category.name === searchItem) {
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    const { onSearchChange, stateCategories } = this.props;
    const { redirect } = this.state;

    const categories = [];
    for (let i in stateCategories) {
      categories.push({
        id: i,
        name: stateCategories[i].name
      });
    }

    let options = categories.map(category => (
      <option key={category.id}>{category.name}</option>
    ));

    let product = null;
    if (redirect === true) {
      product = <Redirect to="/products" />;
    }

    return (
      <div style={{ margin: 'auto', width: '30%', paddingTop: '8%' }}>
        {product}
        <img
          style={{
            paddingLeft: '29%',
            width: '70%',
            height: '5%',
            display: 'inline-block',
            textAlign: 'center'
          }}
          src={Logo}
          alt="logo"
        />
        <p style={{ paddingLeft: '5%', textAlign: 'center' }}>
          {'Building Product Selection Platform'}
        </p>
        <form onSubmit={this.submitHandler} className="w-100">
          <div className="row my-3">
            <div className="col input-container">
              <div className="col-mx-3">
                <select className="select-category">{options}</select>
              </div>
              {/* //  */}
              <div className="arrow-down" id="search-arrow" />
              <input
                className="col-mx-8"
                onChange={onSearchChange}
                placeholder="Search..."
              />
              <div className="arrow-down" id="input-arrow" />
              <div>
                <button className="input-logo" id="search-btn">
                  <i id="search-logo" className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateCategories: state.categories.categories,
    searchItem: state.search.searchField
  };
};

const mapStateToDispatch = dispatch => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Search);
