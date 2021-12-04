import React from 'react'
import Task from './Task'

export default {
  component: Task,
  title: 'Task',
}

const Template = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archieved = Template.bind({})
Archieved.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIEVED',
  },
}

const longTitleString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

export const LongTitle = Template.bind({})
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
}
