import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import cs from 'classnames';

class Layout extends PureComponent {
  static propTypes = {
    header: PropTypes.func,
    footer: PropTypes.func
  };

  renderMain = className => {
    const { children } = this.props;
    return (
      <main className={className}>
        <SectionTitle>Main</SectionTitle>
        {children}
      </main>
    );
  };

  renderHeader = HeaderChild =>
    HeaderChild ? (
      <header className="header">
        <SectionTitle className="header__title section-title">
          Header
        </SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    ) : null;

  renderFooter = FooterChild =>
    FooterChild ? (
      <footer className="footer">
        <SectionTitle className="header__title section-title">
          Footer
        </SectionTitle>
        <FooterChild />
      </footer>
    ) : null;

  render() {
    const { header, footer } = this.props;
    const mainClassName = cs(
      'main',
      { 'main--with-header': header },
      { 'main--with-footer': footer }
    );

    return (
      <Fragment>
        {this.renderHeader(header)}
        {this.renderMain(mainClassName)}
        {this.renderFooter()}
      </Fragment>
    );
  }
}

export default Layout;
