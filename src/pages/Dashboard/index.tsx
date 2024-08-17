import { Card, CardContent } from '@mui/material'
import React from 'react'

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">1</span>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">2</span>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">3</span>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">4</span>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">5</span>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">6</span>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <span className="text-4xl font-semibold">7</span>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard