import tvShow from '../reducers/TvShow';
import { SHOW_FETCHED } from '../actions/TvShowActions';


it('Set a show in response to SHOW_FETCHED', () => {
    const shows = [{id: 1, name:'PowerPuffGirls'},{id:2, name:'PowerpuffGirlsTwo'}, {id:3, name:'PowerPuffGirlsThree'}]
    const action = { 
        type: SHOW_FETCHED,
        payload: shows
    }

    const newState = tvShow({}, action)

    expect(newState).toStrictEqual(shows)
})