import React from 'react';
import Article from 'components/Article';

const ArticleList = ({articles, store}) => {
  return (
    <div>
      {
        Object.values(articles).map(article =>
          <Article
            key={article.id}
            article={article}
            store={store}
          />
        )

      }
    </div>
  );
};

export default ArticleList;