import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from 'components/ArticleList';

describe('ArticleList', () => {
  it('should render correctly', () => {

    const testProps = {
      articles: {
        a: {id: 'a', date: 'Wed Jul 13 2016', title: 'a title', author: {firstName: 'a', lastName: 'a'}, body: 'a'},
        b: {id: 'b', date: 'Wed Jul 13 2016', title: 'b title', author: {firstName: 'a', lastName: 'a'}, body: 'a'}
      },
      store: {
        lookupAuthor: jest.fn(() => ({}))
      }
    };

    const tree = renderer.create(
      <ArticleList {...testProps} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(2);
  });
});
