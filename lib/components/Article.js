import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withStore from '../withStore';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '.85rem'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10
  },
  body: {
    paddingLeft: 20
  }
};

const getDateDisplay = (dateString) => {
  return new Date(dateString).toDateString();
};

class Article extends PureComponent {
  render() {
    let {article, author} = this.props;
    return (
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div>
        <div style={styles.date}>{getDateDisplay(article.date)}</div>
        <div style={styles.author}>
          <a href={author.website}>
            {author.firstName} {author.lastName}
          </a>
        </div>
        <div style={styles.body}>{article.body}</div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      website: PropTypes.string
    }),
    body: PropTypes.string.isRequired
  })
};

const getExtraProps = (store, props) => {
  return {
    author: store.lookupAuthor(props.article.authorId)
  };
};

export default withStore(getExtraProps)(Article);