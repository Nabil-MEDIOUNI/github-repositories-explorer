import React from "react";

const RepoCard = props => {
  const {
    name,
    html_url,
    description,
    stargazers_count,
  } = props.repo;

  return (
    <div className="repoComp">
      <h2 className="repoName">
        {` ${name} `}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-external-link-alt" />
        </a>
      </h2>
      {description && <h2 className="repoDescription">{description}</h2>}
      {stargazers_count > 0 && (
        <p className="repoOthers" title="Stargazers">
          {` ${stargazers_count}`}
          <i className="fas fa-star" />
        </p>
      )}
    </div>
  );
};

RepoCard.propTypes = {
  name: PropTypes.string,
  html_url: PropTypes.string,
  description: PropTypes.string,
  stargazers_count: PropTypes.number,
}

RepoCard.defaultProps = {
  name: '',
  html_url: '',
  description: '',
  stargazers_count: undefined,
}

export default RepoCard;
