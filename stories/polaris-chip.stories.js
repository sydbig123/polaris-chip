import { html } from 'lit';
import '../src/polaris-chip.js';

export default {
  title: 'PolarisChip',
  component: 'polaris-chip',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-chip
      style="--polaris-chip-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-chip>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
