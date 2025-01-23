import { LedgerEntries } from "@/components/ledger-entries"

export default function LedgerPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Ledger Entries</h1>
      <LedgerEntries />
    </div>
  )
}

