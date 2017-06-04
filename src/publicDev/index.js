import _  from 'lodash'
import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import Banner from './components/banner'
import SearchBar  from './components/search_bar'
import BeerDisplay  from './components/beer_display'
import BreweryDisplay  from './components/brewery_display'
import utils  from './utils'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      currentResult: 0,
      results: 0,
      data: {
      name: 'Typical Ale',
      imgURL: 'https://i2.wp.com/steamworksbrewing.com/wp-content/uploads/2016/09/pale_ale.png',
      desc: 'Ale, along with bread, was an important source of nutrition in the medieval world, particularly small beer, also known as table beer or mild beer, which was highly nutritious, contained just enough alcohol to act as a preservative, and provided hydration without intoxicating effects. Small beer would have been consumed daily by almost everyone, including children, in the medieval world, with higher-alcohol ales served for recreational purposes. The lower cost for proprietors combined with the lower taxes levied on small beer led to the selling of beer labeled "strong beer" that had actually been diluted with small beer.[4] In medieval times, ale may have been safer to drink than most water (the germ theory of disease was unheard of, and the sterilizing properties of boiling unknown); however, there is no period evidence that people were aware of this nor that they chose to drink ale for this reason. The alcohol, hops, and some ingredients in gruit used to preserve some ales may have contributed to their lower load of pathogens, when compared to water. However, ale was largely safer due to the hours of boiling required in production, not the alcoholic content of the finished beverage.'
    },
    brewData: {
      name: 'Beer',
      desc: 'Beer'
    },
    json: null
    }
    utils.loginToServer()
    this.beerSearch('', 'RANDOM');
  }
    beerSearch(term, API){
      utils.QuerySearch({term,API}, data => {
          console.log('BeerSearch:', data.data)
        this.setState(utils.ParseJSON(data.data))
      })
  }

  render() {
  const beerSearch = _.debounce((term, API) => { this.beerSearch(term, API) }, 500);

    return (
      <div>
        <Banner/>
        <SearchBar onSearchTermChange={beerSearch}/>
        <BeerDisplay data= {this.state.data}/>
        <BreweryDisplay data= {this.state.brewData}/>
        <button onClick={() => this.setState(utils.ParseJSON(this.state.json, ++this.state.currentResult))}> See Next Beer... If there is one </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
