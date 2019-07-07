import React from 'react';
import Article from './Article';

const ArticleList = ({articles, actions}) => {
  return (
    <div>
      {
        Object.values(articles).map(article =>
          <Article
            key={article.id}
            article={article}
            actions={actions}
          />
        )

      }
    </div>
  );
};

export default ArticleList;