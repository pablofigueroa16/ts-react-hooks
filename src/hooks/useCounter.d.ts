interface UseCounterProps {
  initialValue?: number
}
interface UseCounter {
  value: number
  increment: (num?: number) => void
  decrement: (num?: number) => void
  reset: () => void
}
export declare const useCounter: ({
  initialValue,
}: UseCounterProps) => UseCounter
export {}
