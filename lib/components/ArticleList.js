import React, {PureComponent} from 'react';
import Article from 'components/Article';

class ArticleList extends PureComponent {
  render() {
    let {articles} = this.props;
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
  }
}

export default ArticleList;