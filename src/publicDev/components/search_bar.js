import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '', selectValue: 'RANDOM'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({selectValue:e.target.value})
  }

  render() {
    return (
      <div className="search-bar row form-group">
        <input value={this.state.term} className='form-control col-xs-4'
          onChange={event => this.onInputChange(event.target.value, this.state.selectValue)} />
          <select className='selectpicker col-xs-2' value={this.state.selectValue} onChange = {this.handleChange}>
          <option value='ID' data-tokens='id'> ID</option>
          <option value='RANDOM' data-tokens='Random'> Random</option>
          <option value='VARIATION' data-tokens='Variations'> Variations</option>
          <option value='HOPS' data-tokens='hops'> Hops</option>
        </select>
        <button className='btn btn-primary'> <i className="fa fa-search" aria-hidden="true"></i> </button>
      </div>
    );
  }

  onInputChange(term, api) {
    this.setState({term: term, selectValue: api});
    this.props.onSearchTermChange(term, api);
  }
}

export default SearchBar;
