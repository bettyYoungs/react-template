import * as echarts from 'echarts'
import { ECharts, EChartsCoreOption } from 'echarts'
import { Ref, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

export interface ChartProps {
  option: EChartsCoreOption,
  loading: Boolean
}

export interface DRefHandle {
  chart: React.MutableRefObject<echarts.ECharts | null>
  setOption: (option: EChartsCoreOption, notMerge?: boolean, lazyUpdate?: boolean) => void;
  resize: () => void
}

const Chart = (props: ChartProps, ref: Ref<DRefHandle>) => {
  const chartRef = useRef<HTMLElement | null>(null)

  const chart = useRef<ECharts | null>(null)
  function init() {
    if (props.option && chart) {
      chart.current = echarts.init(chartRef.current!)
      setOption(props.option)
    }
  }

  function setOption(option: EChartsCoreOption, notMerge?: boolean, lazyUpdate?: boolean) {
    chart.current!.setOption(option, notMerge, lazyUpdate)
  }

  function resize() {
    chart.current!.resize()
  }

  useEffect(() => {
    setOption(props.option)
  }, [props.option])

  // show loading
  useEffect(() => {
    if (!chart.current) return
    if (props.loading) {
      chart.current!.showLoading()
    } else {
      chart.current!.hideLoading()
    }
  }, [props.loading])

  useEffect(() => {
    init()
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      chart,
      setOption,
      resize
    }),
    []
  );

  return (
    <div ref="chartRef" className='w-full h-full' />
  )
}

const ForwardRefChart = forwardRef(Chart);
export default ForwardRefChart