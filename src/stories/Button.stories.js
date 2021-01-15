import StoryButton from './Button'

export default {
  title: 'Components/Button/Button',
  component: StoryButton,
}

const Template = (args) => <StoryButton {...args} />

export const Button = Template.bind({})
Button.args = {
  size: 'medium',
  children: 'Button',
}
