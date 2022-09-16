import React from 'react';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const RepoCard = () => {
  return (
    <div className="repo-card">
      <a href="https://github.com/ACM-Thapar/CS_COURSE_GUIDE" target="_blank">
        <div className="repo-div">
          <h2>
            <div className="folder-icon">
              <FolderSpecialOutlinedIcon fontSize="large" />
            </div>
            CS_COURSE_GUIDE
          </h2>
          <p>
            This is a project particularly aimed at guideing the beginners who
            want to learn and explore various forms of coding like Web
            Developement , App Developement , Machine Learning , Blockchain ,
            Competitve Coding etc .
          </p>
          <StarOutlinedIcon /> 80
        </div>
      </a>
    </div>
  );
};

export default RepoCard;
