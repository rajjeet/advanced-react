class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObjects(rawData.articles),
      authors: this.mapIntoObjects(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 1;

    setTimeout(() => {
      let newArticle = {
        ...rawData.articles[0],
        id: 'fakeId'
      };
      this.data= {
        ...this.data,
        articles : {
          ...this.data.articles,
          [newArticle.id]: newArticle
        }
      };

      this.notifySubscribers();
    }, 6000);
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

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  };

}


export default StateApi;