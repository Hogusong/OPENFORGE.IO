import { Component, Prop } from '@stencil/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.scss',
})
export class AppMembers {
  @Prop() members: any[];
  ts: TranslationService;

  constructor() {
    this.ts = new TranslationService();
  }

  render() {
    const { translate } = this.ts;
    return (
      <div class="team">
        {this.members.map(member => (
          <figure class="member">
            <stencil-route-link url="/opportunities" exact={true}>
              <app-img
                class="member--image"
                src={member.image}
                alt={member.name}
              />
              <div class="member--overlay">
                <figcaption class="member--text">
                  <span class="">{member.name}</span>
                  {member.titleKey && (
                    <span class="">
                      {translate(`home.member.title.${member.titleKey}`)}
                    </span>
                  )}
                </figcaption>
              </div>
            </stencil-route-link>
          </figure>
        ))}
      </div>
    );
  }
}
