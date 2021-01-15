import StoryInput from '~/components/Input'

export default {
  title: 'Components/Input',
  component: StoryInput,
}

const Template = (args) => <StoryInput {...args} />

export const Input = Template.bind({})
Input.args = {}
