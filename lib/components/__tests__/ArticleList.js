import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from 'components/ArticleList';

describe('ArticleList', () => {
  it('should render correctly', () => {

    const testProps = {
      articles: {
        a: {id: 'a'},
        b: {id: 'b'}
      },
      actions: {
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
