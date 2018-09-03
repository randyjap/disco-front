import { fakedata } from '../../containers/Ecommerce/card/config';

const cardActions = {
  CHANGE_CARDS: 'CHANGE_CARDS',
  addCard: card => (dispatch, getState) => {
    const cards = [card, ...getState().Cards.get('cards')];
    dispatch({
      type: cardActions.CHANGE_CARDS,
      cards,
    });
  },
  editCard: editCard => (dispatch, getState) => {
    const oldCards = getState().Cards.get('cards');
    const cards = [];
    oldCards.forEach((card) => {
      if (card.id !== editCard.id) {
        cards.push(card);
      } else {
        cards.push(editCard);
      }
    });
    dispatch({
      type: cardActions.CHANGE_CARDS,
      cards,
    });
  },
  deleteCard: deletedCard => (dispatch, getState) => {
    const oldCards = getState().Cards.get('cards');
    const cards = [];
    oldCards.forEach((card) => {
      if (card.id !== deletedCard.id) {
        cards.push(card);
      }
    });
    dispatch({
      type: cardActions.CHANGE_CARDS,
      cards,
    });
  },
  restoreCards: () => ({
    type: cardActions.CHANGE_CARDS,
    cards: fakedata,
  }),
};
export default cardActions;
