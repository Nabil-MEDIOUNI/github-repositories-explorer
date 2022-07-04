import React from 'react';
import PropTypes from 'prop-types';

const RepoCard = ({ repo }) => {
  const {
    name,
    html_url: htmlUrl,
    description,
    stargazers_count: stargazersCount,
  } = repo;

  return (
    <div className="repoComp">
      <h2 className="repoName">
        {` ${name} `}
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-external-link-alt" />
        </a>
      </h2>
      {description && <h2 className="repoDescription">{description}</h2>}
      {stargazersCount > 0 && (
        <p className="repoOthers" title="Stargazers">
          {` ${stargazersCount}`}
          <i className="fas fa-star" />
        </p>
      )}
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.objectOf(PropTypes.string),
};

RepoCard.defaultProps = {
  repo: {},
};

export default RepoCard;
