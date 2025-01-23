"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export function LedgerEntries() {
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState({ date: "", description: "", debit: 0, credit: 0 })

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    const response = await fetch("/api/ledger")
    const data = await response.json()
    setEntries(data)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEntry({ ...newEntry, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/ledger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
    if (response.ok) {
      setNewEntry({ date: "", description: "", debit: 0, credit: 0 })
      fetchEntries()
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4">Add New Entry</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Ledger Entry</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" value={newEntry.date} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={newEntry.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="debit">Debit</Label>
              <Input id="debit" name="debit" type="number" value={newEntry.debit} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="credit">Credit</Label>
              <Input id="credit" name="credit" type="number" value={newEntry.credit} onChange={handleInputChange} />
            </div>
            <Button type="submit">Add Entry</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Debit</TableHead>
            <TableHead>Credit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry._id}>
              <TableCell>{new Date(entry.date).toLocaleDateString()}</TableCell>
              <TableCell>{entry.description}</TableCell>
              <TableCell>{entry.debit}</TableCell>
              <TableCell>{entry.credit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

