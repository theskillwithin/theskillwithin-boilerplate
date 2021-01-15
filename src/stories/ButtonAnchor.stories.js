import { StoryButtonAnchor } from './ButtonAnchor'

export default {
  title: 'Components/Button/ButtonAnchor',
  component: StoryButtonAnchor,
}

const Template = (args) => <StoryButtonAnchor {...args} />

export const ButtonAnchor = Template.bind({})
ButtonAnchor.args = {
  size: 'medium',
  children: 'Button',
}
