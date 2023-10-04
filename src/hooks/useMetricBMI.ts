import { useEffect, useState } from 'react'
import { useBMIContext, BMIContextType } from '../context/BMIContext'

const useMetricBMI = () => {
  const { heightMetric, weightMetric, setResultBMI, setInputIsEmpty } =
    useBMIContext() as BMIContextType
  const [idealWeightRange, setIdealWeightRange] = useState<{
    minWeight: number
    maxWeight: number
  }>({ minWeight: 0, maxWeight: 0 })

  useEffect(() => {
    const isAllZero = heightMetric === 0 || weightMetric === 0

    // Função para calcular o IMC
    const calculateBMI = (height: number, weight: number): number => {
      const heightInMeters = height / 100
      const result = weight / (heightInMeters * heightInMeters)
      return result
    }

    // Função para calcular o peso minimo e maximo para um IMC saudável
    const calculateIdealWeightRange = (height: number) => {
      const heightInMeters = height / 100
      const minWeight = 18.5 * heightInMeters * heightInMeters
      const maxWeight = 24.9 * heightInMeters * heightInMeters

      return { minWeight, maxWeight }
    }

    const isEmpty = isAllZero
    setInputIsEmpty(isEmpty)

    if (!isEmpty) {
      const result = calculateBMI(heightMetric, weightMetric)
      const rangeResult = calculateIdealWeightRange(heightMetric)
      setResultBMI(result)
      setIdealWeightRange(rangeResult)
    }
  }, [heightMetric, setInputIsEmpty, setResultBMI, weightMetric])

  return { ...useBMIContext(), idealWeightRange }
}

export default useMetricBMI
