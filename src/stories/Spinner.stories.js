import StorySpinner from '~/components/Spinner'

export default {
  title: 'Components/Spinner',
  component: StorySpinner,
  parameters: {
    backgrounds: {
      default: 'backgroundPrimary',
    },
  },
}

const Template = (args) => <StorySpinner {...args} />

export const Spinner = Template.bind({})

Spinner.args = {}
