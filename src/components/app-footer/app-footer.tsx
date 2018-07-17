import { Component } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  ts: TranslationService;

  constructor() {
    this.ts = new TranslationService();
  }

  render() {
    const { translate } = this.ts;

    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="content col-sm-12 col-md-4">
              <h2>{translate('footer.address.header')}</h2>
              <p>
                {translate('footer.address.name')}
                <br />
                {translate('footer.address.line1')}
                <br />
                {translate('footer.address.line2')}
              </p>
              <a href="mailto:hello@openforge.io">
                {translate('footer.address.email')}
              </a>
              {/* <a href="https://www.openforge.io" target="_blank" rel="noopener">
                Work at OpenForge
              </a> */}
            </div>
            <div class="footer--column col-12 col-sm-4">
              <h2>Follow Us</h2>
              <ul class="footer--social-links">
                <li>
                  <a href="https://twitter.com/OpenForge_US" target="_blank">
                    <i class="fab fa-twitter-square" aria-hidden="true" />{' '}
                    @OpenForge_US
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/OpenForgeUS/"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square" aria-hidden="true" />{' '}
                    OpenForge_US
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/openforge/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin" aria-hidden="true" />{' '}
                    OpenForge_US
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer--column col-12 col-sm-4">
              <h2>
                <app-translate key="footer.webinar.title" />
              </h2>
              <p>
                <app-translate key="footer.webinar.text" />
              </p>
              <a
                href="http://learn.openforge.io/"
                target="_blank"
                class="footer--btn btn btn-primary"
              >
                <app-translate key="footer.webinar.register" />
              </a>
            </div>
          </div>

          <p class="copyright">
            <app-translate key="footer.copyright" />
          </p>
        </div>
      </footer>
    );
  }
}
