class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObjects(rawData.articles),
      authors: this.mapIntoObjects(rawData.authors),
      searchTerm: ''
    };
  }

  mapIntoObjects = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  };

  lookupAuthor = authorId => this.data.authors[authorId];

  getState = () => this.data;

}

export default StateApi;