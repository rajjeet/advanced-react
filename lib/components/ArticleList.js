import React from 'react';
import Article from 'components/Article';

const ArticleList = ({articles}) => {
  return (
    <div>
      {
        Object.values(articles).map(article =>
          <Article
            key={article.id}
            article={article}
          />
        )

      }
    </div>
  );
};

export default ArticleList;