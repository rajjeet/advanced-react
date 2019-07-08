class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObjects(rawData.articles),
      authors: this.mapIntoObjects(rawData.authors),
      searchTerm: ''
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 1;
  }

  mapIntoObjects = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  };

  lookupAuthor = authorId => this.data.authors[authorId];

  getState = () => this.data;

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  setSearchTerm = searchTerm => {
    this.mergeWithState({
      searchTerm
    });
  };

  subscribe = cb => {
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId++;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };
}


export default StateApi;