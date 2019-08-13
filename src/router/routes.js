import Layout from '@/views/Layout'
import DashBoard from '@/views/dashboard/index'
import Agent from '@/views/agent/index'
import MyCruise from '@/views/mycruise/index'
import Help from '@/views/help/index'
import AgentContent from '@/components/agent/AgentContent'

const dashboardRoute = {
  path: '/',
  name: 'root',
  component: Layout,
  redirect: '/agent',
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/agent',
      name: 'agent',
      component: Agent,
      redirect: '/agent/all',
      children: [
        {
          path: '/agent/:title',
          name: 'agentNav',
          component: AgentContent,
        }
      ]
    },
    {
      path: 'mycruise',
      name: 'mycruise',
      component: MyCruise,
    },
    {
      path: 'help',
      name: 'help',
      component: Help,
    }
  ]
}


export default [
  dashboardRoute,
]