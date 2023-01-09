import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  countryChange = event => {
    this.setState({
      capitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {capitalId} = this.state
    const findCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )
    return findCountry.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)

    return (
      <div className="app">
        <div className="capital-card">
          <h1>Countries And Capitals</h1>
          <select
            className="select-tab"
            onChange={this.countryChange}
            value={capitalId}
          >
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="select-tab">is capital of which country?</label>

          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
