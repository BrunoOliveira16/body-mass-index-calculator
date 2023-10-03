import { useEffect } from 'react'
import { useBMIContext, BMIContextType } from '../context/BMIContext'

const useMetricBMI = () => {
  const { heightMetric, weightMetric, setResultBMI, setInputIsEmpty } =
    useBMIContext() as BMIContextType

  useEffect(() => {
    const isAllZero = heightMetric === 0 || weightMetric === 0

    const calculateBMI = (height: number, weight: number): number => {
      const heightInMeters = height / 100
      const result = weight / (heightInMeters * heightInMeters)
      return result
    }

    const isEmpty = isAllZero
    setInputIsEmpty(isEmpty)

    if (!isEmpty) {
      const result = calculateBMI(heightMetric, weightMetric)
      setResultBMI(result)
    }
  }, [heightMetric, setInputIsEmpty, setResultBMI, weightMetric])
}

export default useMetricBMI
