const selectOverrides = {
  MuiSelect: {
    styleOverrides: {
      select: {
        minWidth: '6rem !important',
        '&.MuiTablePagination-select': {
          minWidth: '1rem !important'
        }
      }
    }
  }
};

export default selectOverrides;
