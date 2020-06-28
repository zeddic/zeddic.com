import React from 'react';
import {Layout} from '../components/layout';
import './404.scss';

export default function PageNotFound() {
  return (
    <Layout>
      <div className="no-page-body">
        <h1>404</h1>
        <p>
          <strong>Page not found :(</strong>
        </p>
        <p>The requested page could not be found</p>
      </div>
    </Layout>
  );
}
