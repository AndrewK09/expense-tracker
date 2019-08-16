import React from 'react';

import { IconButton } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const PageActions = props => {
  const { count, page, rowsPerPage, onChangePage } = props;
  let lastPage = Math.ceil(count > rowsPerPage ? count / rowsPerPage - 1 : 0);

  const handleFirstPageClick = e => {
    onChangePage(e, 0);
  };
  const handlePrevPageClick = e => {
    onChangePage(e, page - 1);
  };
  const handleNextPageClick = e => {
    onChangePage(e, page + 1);
  };
  const handleLastPageClick = e => {
    onChangePage(e, lastPage);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleFirstPageClick} disabled={page === 0}>
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handlePrevPageClick} disabled={page === 0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={handleNextPageClick} disabled={page === lastPage}>
        <KeyboardArrowRight />
      </IconButton>
      <IconButton onClick={handleLastPageClick} disabled={page === lastPage}>
        <LastPageIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default PageActions;
