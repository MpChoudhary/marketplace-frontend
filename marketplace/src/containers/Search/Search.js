import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    console.log('================Search');
    console.log(this.props.stateCategories);
    this.props.onRequestCategories();
  }

  submitHandler = event => {
    event.preventDefault();
    const { searchItem, stateCategories } = this.props;
    console.log(this.props.stateCategories);
    console.log(this.props.searchItem);

    stateCategories.map(category => {
      console.log(category);
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
            paddingLeft: '5%',
            width: '70%',
            height: '5%',
            display: 'inline-block'
          }}
          src={Logo}
          alt="logo"
        />
        <p style={{ paddingLeft: '5%' }}>
          {'Building Product Selection Platform'}
        </p>
        <form onSubmit={this.submitHandler}>
          <div className="row my-3">
            <div className="col input-container">
              <select className="select-category">{options}</select>
              <div className="arrow-down" id="search-arrow" />
              <input onChange={onSearchChange} />
              <div className="arrow-down" id="input-arrow" />
              {/* <div> */}
              <button
              // className="input-logo"
              // id="search-btn"
              // onClick={this.submitHandler}
              >
                Search
                {/* <i id="search-logo" className="fas fa-search" /> */}
              </button>
              {/* </div> */}
              {/* {optionsList} */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.categories);
  // for (let i in state.categories.categories) {
  //   console.log(state.categories.categories);
  //   if (state.categories.categories[i].name === state.search.searchField) {
  //     return { redirect: true };
  //   }
  // }
  return {
    stateCategories: state.categories.categories,
    searchItem: state.search.searchField
    // redirect: false
  };
};

const mapStateToDispatch = dispatch => {
  return {
    onSearchChange: event => {
      console.log(event.target.value);
      dispatch(setSearchField(event.target.value));
    },
    onRequestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Search);
