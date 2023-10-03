import { createContext, useContext, useState, ReactNode } from 'react'

export type BMIContextType = {
  heightMetric: number
  weightMetric: number
  heightImperial: { ft: number; in: number }
  weightImperial: { st: number; lbs: number }
  resultBMI: number
  inputIsEmpty: boolean
  setHeightMetric: (height: number) => void
  setWeightMetric: (weight: number) => void
  setHeightImperial: (heightImperial: { ft: number; in: number }) => void
  setWeightImperial: (weightImperial: { st: number; lbs: number }) => void
  setResultBMI: (resultBMI: number) => void
  setInputIsEmpty: (inputIsEmpty: boolean) => void
}

export const BMIContext = createContext<BMIContextType | undefined>(undefined)

type BMIProviderProps = {
  children: ReactNode
}

export const BMIProvider = ({ children }: BMIProviderProps) => {
  const [heightMetric, setHeightMetric] = useState<number>(0)
  const [weightMetric, setWeightMetric] = useState<number>(0)
  const [heightImperial, setHeightImperial] = useState<{
    ft: number
    in: number
  }>({ ft: 0, in: 0 })
  const [weightImperial, setWeightImperial] = useState<{
    st: number
    lbs: number
  }>({ st: 0, lbs: 0 })
  const [resultBMI, setResultBMI] = useState<number>(0)
  const [inputIsEmpty, setInputIsEmpty] = useState<boolean>(true)

  const value = {
    heightMetric,
    weightMetric,
    heightImperial,
    weightImperial,
    resultBMI,
    inputIsEmpty,
    setHeightMetric,
    setWeightMetric,
    setHeightImperial,
    setWeightImperial,
    setResultBMI,
    setInputIsEmpty
  }

  return <BMIContext.Provider value={value}>{children}</BMIContext.Provider>
}

export const useBMIContext = () => useContext(BMIContext)
