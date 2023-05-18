import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Dashboard } from '../Dashboard';

describe('Dashboard Component', () => {
  it('should render', () => {
    render(<Dashboard user="test" />);
  });
});
