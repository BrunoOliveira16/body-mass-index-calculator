import { useEffect, useState } from 'react'
import { useBMIContext, BMIContextType } from '../context/BMIContext'

const useImperialBMI = () => {
  const { heightImperial, weightImperial, setInputIsEmpty, setResultBMI } =
    useBMIContext() as BMIContextType
  const [idealWeightRange, setIdealWeightRange] = useState<{
    minWeight: { st: number; lbs: number }
    maxWeight: { st: number; lbs: number }
  }>({
    minWeight: { st: 0, lbs: 0 },
    maxWeight: { st: 0, lbs: 0 }
  })

  const isAllZero =
    (heightImperial.ft === 0 && heightImperial.in === 0) ||
    (weightImperial.st === 0 && weightImperial.lbs === 0)

  // Função para calcular o IMC
  const calculateImperialBMI = (
    height: { ft: number; in: number },
    weight: { st: number; lbs: number }
  ): number => {
    const totalHeightInInches = height.ft * 12 + height.in
    const totalWeightInPounds = weight.st * 14 + weight.lbs

    const result =
      (703 * totalWeightInPounds) / (totalHeightInInches * totalHeightInInches)

    return result
  }

  // Função para calcular o peso minimo e maximo para um IMC saudável
  const calculateIdealWeightRange = (height: { ft: number; in: number }) => {
    const totalHeightInMeters = (height.ft * 12 + height.in) * 0.0254
    const minWeightKg = 18.5 * totalHeightInMeters * totalHeightInMeters
    const maxWeightKg = 24.5 * totalHeightInMeters * totalHeightInMeters

    //converter o peso de kg para st e lbs
    const minWeightSt = Math.floor(minWeightKg / 6.35029)
    const minWeightLbs = Math.round((minWeightKg % 6.35029) / 0.453592)
    const maxWeightSt = Math.floor(maxWeightKg / 6.35029)
    const maxWeightLbs = Math.round((maxWeightKg % 6.35029) / 0.453592)

    return {
      minWeight: { st: minWeightSt, lbs: minWeightLbs },
      maxWeight: { st: maxWeightSt, lbs: maxWeightLbs }
    }
  }

  useEffect(() => {
    const isEmpty = isAllZero
    setInputIsEmpty(isEmpty)

    if (!isEmpty) {
      const result = calculateImperialBMI(heightImperial, weightImperial)
      const rangeResult = calculateIdealWeightRange(heightImperial)
      setResultBMI(result)
      setIdealWeightRange(rangeResult)
    }
  }, [setInputIsEmpty, setResultBMI, isAllZero, heightImperial, weightImperial])

  return { ...useBMIContext(), idealWeightRange }
}

export default useImperialBMI
