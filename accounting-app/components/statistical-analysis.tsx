"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export function StatisticalAnalysis() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // In a real application, you would fetch this data from your API
    // For this example, we'll use mock data
    const mockData = [
      { month: "Jan", revenue: 4000, expenses: 2400, profit: 2400 },
      { month: "Feb", revenue: 3000, expenses: 1398, profit: 2210 },
      { month: "Mar", revenue: 2000, expenses: 9800, profit: 2290 },
      { month: "Apr", revenue: 2780, expenses: 3908, profit: 2000 },
      { month: "May", revenue: 1890, expenses: 4800, profit: 2181 },
      { month: "Jun", revenue: 2390, expenses: 3800, profit: 2500 },
      { month: "Jul", revenue: 3490, expenses: 4300, profit: 2100 },
    ]
    setData(mockData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            <Line type="monotone" dataKey="profit" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

