import tvShow from '../reducers/TvShow';
import { SHOW_FETCHED } from '../actions/TvShowActions';


it('Set a show in response to SHOW_FETCHED', () => {
    const show = [{id: 1, name:'PowerPuffGirls'}]
    const action = { 
        type: SHOW_FETCHED,
        payload: show
    }

    const newState = tvShow({}, action)

    expect(newState).toStrictEqual(show)
})