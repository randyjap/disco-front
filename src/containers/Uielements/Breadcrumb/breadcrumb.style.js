import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import Breadcrumbs from '../../../components/uielements/breadcrumb';

const AnrBreadcrumb = props => <Breadcrumbs {...props} />;

const Breadcrumb = styled(AnrBreadcrumb)`
  color: ${palette('text', 3)};
  font-size: 13px;

  a {
    color: ${palette('text', 3)};
    font-size: 13px;
  }

  > span:last-child {
    font-weight: 700;
    color: ${palette('text', 1)};
  }
`;

export default Breadcrumb;
