import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MenuComponent } from './menu.component';

export default {
  title: 'MenuComponent',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MenuComponent>;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
  template: `
    <starwars-menu [title]="title" >
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" aria-current="page" href="#"
                routerLink="especies">Especies</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" href="#" routerLink="characters">Characters</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" routerLinkActive="active" href="#" routerLink="users">Users</a>
        </li>
      </ul>
    </starwars-menu>
  `
});


export const Primary = Template.bind({});
Primary.args = {
  title: ''
}