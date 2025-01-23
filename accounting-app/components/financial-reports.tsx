"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinancialReports() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    // In a real application, you would fetch this data from your API
    // For this example, we'll use mock data
    const mockData = {
      incomeStatement: {
        revenue: 100000,
        expenses: 75000,
        netIncome: 25000,
      },
      balanceSheet: {
        assets: 500000,
        liabilities: 300000,
        equity: 200000,
      },
      cashFlow: {
        operatingCashFlow: 50000,
        investingCashFlow: -20000,
        financingCashFlow: -10000,
        netCashFlow: 20000,
      },
    }
    setData(mockData)
  }

  if (!data) return <div>Loading...</div>

  return (
    <Tabs defaultValue="income">
      <TabsList>
        <TabsTrigger value="income">Income Statement</TabsTrigger>
        <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
        <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
      </TabsList>
      <TabsContent value="income">
        <Card>
          <CardHeader>
            <CardTitle>Income Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Revenue:</span>
                <span>${data.incomeStatement.revenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Expenses:</span>
                <span>${data.incomeStatement.expenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Net Income:</span>
                <span>${data.incomeStatement.netIncome.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="balance">
        <Card>
          <CardHeader>
            <CardTitle>Balance Sheet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Assets:</span>
                <span>${data.balanceSheet.assets.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Liabilities:</span>
                <span>${data.balanceSheet.liabilities.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Equity:</span>
                <span>${data.balanceSheet.equity.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="cashflow">
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Operating Cash Flow:</span>
                <span>${data.cashFlow.operatingCashFlow.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Investing Cash Flow:</span>
                <span>${data.cashFlow.investingCashFlow.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Financing Cash Flow:</span>
                <span>${data.cashFlow.financingCashFlow.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Net Cash Flow:</span>
                <span>${data.cashFlow.netCashFlow.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

