import MortgageCalculator from "../../components/MortgageCalculator"

export default function MortgageCalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Mortgage Calculator</h1>
      <MortgageCalculator />
    </main>
  )
}

