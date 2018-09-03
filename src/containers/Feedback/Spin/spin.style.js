import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import Spins from '../../../components/uielements/spin';

const AntSpin = props => <Spins {...props} />;

const Spin = styled(AntSpin)`
  && {
    .ant-spin-dot {
      i {
        background-color: ${palette('primary', 0)};
      }
    }
  }
`;

export default Spin;
