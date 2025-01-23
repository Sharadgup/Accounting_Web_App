"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ImportExport() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/import", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("File uploaded successfully!")
        setFile(null)
      } else {
        alert("Failed to upload file.")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("An error occurred while uploading the file.")
    }
  }

  const handleExport = async () => {
    try {
      const response = await fetch("/api/export", {
        method: "GET",
      })

      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.style.display = "none"
        a.href = url
        a.download = "accounting_data.xlsx"
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      } else {
        alert("Failed to export data.")
      }
    } catch (error) {
      console.error("Error exporting data:", error)
      alert("An error occurred while exporting data.")
    }
  }

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Import Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={handleFileChange} accept=".xlsx,.xls,.csv" />
          <Button onClick={handleUpload} className="mt-4">
            Upload
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Export Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleExport}>Export to Excel</Button>
        </CardContent>
      </Card>
    </div>
  )
}

