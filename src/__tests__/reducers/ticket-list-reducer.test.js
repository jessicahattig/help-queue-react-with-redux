import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('ticketListReducer', () => {


  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1 
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  }
  let action;
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData; {
      action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id,
  };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        type: c.ADD_TICKET,
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  };

  test('Should successfully delete a ticket', () => {
    action = {
      type: c.DELETE_TICKET,
      id: 1
    };
    expect(ticketListReducer(currentState)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });
});