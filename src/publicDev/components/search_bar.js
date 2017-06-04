import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '', selectValue: 'NAME', show:false, signUp: false, signIn: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({selectValue:e.target.value})
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
          <option value='ID' data-tokens='id'> ID</option>
          <option value='NAME' data-tokens='id'> Name</option>
          <option value='RANDOM' data-tokens='Random'> Random</option>
          <option value='BOTD' data-tokens='Random'> Beer of the Day</option>
          <option value='VARIATION' data-tokens='Variations'> Variations</option>
          <option value='HOPS' data-tokens='Hops'> Hops</option>
          <option value='SOCIAL' data-tokens='id'> Social Accounts </option>
          <option value='INGREDIENTS' data-tokens='id'> Ingredients </option>
          <option value='INGREDIENT_DETAILS' data-tokens='id'> Ingredient Details</option>
          <option value='BREWERIES' data-tokens='id'> Brewery </option>
          <option value='OTHERS_SOLD' data-tokens='Hops'> Brewery's Beers</option>
        </select>
        <button className='btn btn-primary col-xs-1'> <i className="fa fa-search" aria-hidden="true"></i> </button>
                <SweetAlert
        show={this.state.show}
        title="Sign In"
        text="Sign in to your account, or sign up."
        type="info"
        showCancelButton
        confirmButtonText ="Sign In"
        cancelButtonText = "Sign Up"
        onConfirm={() => this.setState({ show: false, signIn: true })}
        onCancel = {() => this.setState({ show: false, signUp: true })}
        />
        <SweetAlert
        show={this.state.signIn}
        title="Sign In"
        text = "Please enter your login details."
        type = "input"
        inputType="email"
        placeholder="Username"
        onConfirm={(e) => this.setState({ signIn: false })}
        //Add Promise here to run Login option
        />
        <SweetAlert
        show={this.state.signUp}
        title="Sign Up"
        text = "Please enter the required information."
        type = "input"
        inputType="email"
        placeholder="Username"
        required
        validationMsg="This information is required."
        onConfirm={(e) => this.setState({ signUp: false })}
        //Add Promise here to run Sign up option
        />
      </div>
    );
  }

  onInputChange(term, api) {
    this.setState({term: term, selectValue: api});
    this.props.onSearchTermChange(term, api);
  }
}

export default SearchBar;
