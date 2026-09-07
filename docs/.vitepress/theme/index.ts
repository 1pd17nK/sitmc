import DefaultTheme from 'vitepress/theme'
import './style.css'
import RailwayLines from './components/RailwayLines.vue'
import HistoryTimeline from './components/HistoryTimeline.vue'
import TeamGrid from './components/TeamGrid.vue'
import BilibiliCard from './components/BilibiliCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RailwayLines', RailwayLines)
    app.component('HistoryTimeline', HistoryTimeline)
    app.component('TeamGrid', TeamGrid)
    app.component('BilibiliCard', BilibiliCard)
  }
}
