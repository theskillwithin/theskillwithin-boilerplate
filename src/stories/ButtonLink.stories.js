import { StoryButtonLink } from './ButtonLink'

export default {
  title: 'Components/Button/ButtonLink',
  component: StoryButtonLink,
}

const Template = (args) => <StoryButtonLink {...args} />

export const ButtonLink = Template.bind({})
ButtonLink.args = {
  size: 'medium',
  children: 'Button',
}
