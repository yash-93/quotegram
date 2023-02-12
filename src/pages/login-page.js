import * as React from 'react';
import { Link } from 'react-router-dom';

function LogInPage() {
  return (
    <React.Fragment>
      <div>LogIn/SignUp</div>
      <Link to={'dashboard'}>Proceed</Link>
    </React.Fragment>
  );
}

export default LogInPage;
