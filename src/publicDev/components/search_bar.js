import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '', selectValue: 'NAME'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({selectValue:e.target.value})
    this.props.onSearchTermChange(this.state.term, this.state.selectValue);
  }
  componentDidMount(){
    this.setState({show : true})
  }

  render() {
    return (
      <div className="search-bar row form-group col-xs-12">
        <input value={this.state.term} className='form-control col-xs-5 col-xs-offset-1'
          onChange={event => this.onInputChange(event.target.value, this.state.selectValue)} />
          <select className='selectpicker col-xs-2' value={this.state.selectValue} onChange = {this.handleChange}>
          <option value='ID'> ID</option>
          <option value='NAME'> Name</option>
          <option value='RANDOM'> Random</option>
          <option value='BOTD'> Beer of the Day</option>
          <option value='VARIATION' data-tokens='Variations'> Variations</option>
          <option value='HOPS'> Hops</option>
          <option value='SOCIAL'> Social Accounts </option>
          <option value='INGREDIENTS'> Ingredients </option>
          <option value='INGREDIENT_DETAILS'> Ingredient Details</option>
          <option value='BREWERIES'> Brewery </option>
          <option value='OTHERS_SOLD'> Brewery's Beers</option>
        </select>
        <button className='btn btn-primary col-xs-1' onClick={ e => this.handleClick(e)}> <i className="fa fa-search" aria-hidden="true"></i> </button>
      </div>
    )
  }
  handleClick(e){
    this.props.onSearchTermChange(this.state.term, this.state.selectValue);
  }
  onInputChange(term, api) {
    this.setState({term: term, selectValue: api});
    this.props.onSearchTermChange(term, api);
  }
}

export default SearchBar;
