import { useEffect } from 'react'
import { useBMIContext, BMIContextType } from '../context/BMIContext'

const useImperialBMI = () => {
  const { heightImperial, weightImperial, setInputIsEmpty, setResultBMI } =
    useBMIContext() as BMIContextType

  const isAllZero =
    (heightImperial.ft === 0 && heightImperial.in === 0) ||
    (weightImperial.st === 0 && weightImperial.lbs === 0)

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

  useEffect(() => {
    const isEmpty = isAllZero
    setInputIsEmpty(isEmpty)

    if (!isEmpty) {
      const result = calculateImperialBMI(heightImperial, weightImperial)
      setResultBMI(result)
    }
  }, [setInputIsEmpty, setResultBMI, isAllZero, heightImperial, weightImperial])
}

export default useImperialBMI
