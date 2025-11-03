"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import styles from "./roi-calculator.module.css";

const universityData = {
  UG: {
    "IIT Delhi": { avgSalary: 1800000, placementRate: 95 },
    "IIT Bombay": { avgSalary: 2000000, placementRate: 98 },
    "IIT Madras": { avgSalary: 1750000, placementRate: 94 },
    "BITS Pilani": { avgSalary: 1200000, placementRate: 90 },
    "NIT Trichy": { avgSalary: 1000000, placementRate: 85 },
    "Delhi University": { avgSalary: 600000, placementRate: 70 },
    "Mumbai University": { avgSalary: 550000, placementRate: 68 },
    "Pune University": { avgSalary: 500000, placementRate: 65 },
  },
  PG: {
    "Amity University Online": { avgSalary: 3500000, placementRate: 100 },
    "Manipal University Online": { avgSalary: 720000, placementRate: 100 },
    "Chitkara University": { avgSalary: 3000000, placementRate: 98 },
    "Amrita": { avgSalary: 2800000, placementRate: 95 },
    "LPU": { avgSalary: 2500000, placementRate: 92 },
    "UPES": { avgSalary: 2200000, placementRate: 90 },
    "Andhra University": { avgSalary: 2000000, placementRate: 88 },
  },
  Diploma: {
    "Polytechnic Delhi": { avgSalary: 350000, placementRate: 60 },
    "Polytechnic Mumbai": { avgSalary: 320000, placementRate: 58 },
    "Government Polytechnic": { avgSalary: 280000, placementRate: 55 },
    "Private Polytechnic": { avgSalary: 250000, placementRate: 50 },
    "ITI Delhi": { avgSalary: 200000, placementRate: 45 },
    "ITI Mumbai": { avgSalary: 180000, placementRate: 42 },
  },
  Other: {
    "Certification Course": { avgSalary: 400000, placementRate: 65 },
    "Online Bootcamp": { avgSalary: 600000, placementRate: 70 },
    "Professional Course": { avgSalary: 800000, placementRate: 75 },
    "Skill Development": { avgSalary: 300000, placementRate: 55 },
  },
}

export default function ROICalculator() {
  const [category, setCategory] = useState("")
  const [university, setUniversity] = useState("")
  const [fees, setFees] = useState(500000)
  const [expectedSalaryMultiplier, setExpectedSalaryMultiplier] = useState(1)
  const [years, setYears] = useState(5)
  const [roi, setROI] = useState(null)

  useEffect(() => {
    if (category && university) {
      calculateROI()
    }
  }, [category, university, fees, expectedSalaryMultiplier, years])

  const calculateROI = () => {
    if (!university || !category) return

    const universityInfo = universityData[category][university]
    const totalFees = fees
    const avgSalary = universityInfo.avgSalary * expectedSalaryMultiplier
    const placementRate = universityInfo.placementRate

    const expectedSalary = (avgSalary * placementRate) / 100
    const totalEarnings = expectedSalary * years
    const netGain = totalEarnings - totalFees
    const roiPercentage = (netGain / totalFees) * 100
    const paybackPeriod = totalFees / expectedSalary
    const monthlyEMI = expectedSalary / 12

    setROI({
      expectedSalary,
      totalEarnings,
      netGain,
      roiPercentage,
      paybackPeriod,
      placementRate,
      totalInvestment: totalFees,
      monthlyEMI,
    })
  }

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`
    } else {
      return `₹${amount.toLocaleString()}`
    }
  }

  const getChartData = () => {
    if (!roi) return []
    return [
      { name: "Investment", value: roi.totalInvestment, fill: "#166434" },
      { name: "Net Gain", value: Math.max(0, roi.netGain), fill: "#bbf7d0" },
    ]
  }

  return (
    <div className="container sec_mb">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Education ROI Calculator</h1>
          <p className="text-muted-foreground">Calculate your return on educational investment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Category Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Education Category</h3>
              <Select
                value={category}
                onValueChange={(value) => {
                  setCategory(value)
                  setUniversity("")
                }}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Select Education Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UG">Undergraduate (UG)</SelectItem>
                  <SelectItem value="PG">Postgraduate (PG)</SelectItem>
                  <SelectItem value="Diploma">Diploma Courses</SelectItem>
                  <SelectItem value="Other">Other Courses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* University Selection */}
            {category && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Choose University</h3>
                <Select value={university} onValueChange={setUniversity}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select University/Institution" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(universityData[category]).map((uni) => (
                      <SelectItem key={uni} value={uni}>
                        {uni}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Course Fees Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-foreground">Course Fees</h3>
                <span className="text-2xl font-bold text-foreground">{formatCurrency(fees)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={fees}
                onChange={(e) => setFees(Number(e.target.value))}
                className={`${styles.customSlider} w-full`}
                style={{ "--progress": `${((fees - 100000) / (5000000 - 100000)) * 100}%` }}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹1.0 L</span>
                <span>₹50.0 L</span>
              </div>
            </div>

            {/* Salary Multiplier */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-foreground">Salary Expectation</h3>
                <span className="text-2xl font-bold text-foreground">
                  {(expectedSalaryMultiplier * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={expectedSalaryMultiplier}
                onChange={(e) => setExpectedSalaryMultiplier(Number(e.target.value))}
                className={`${styles.customSlider} w-full`}
                style={{ "--progress": `${((expectedSalaryMultiplier - 0.5) / (2 - 0.5)) * 100}%` }}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>50%</span>
                <span>200%</span>
              </div>
            </div>

            {/* Years Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-foreground">Analysis Period</h3>
                <span className="text-2xl font-bold text-foreground">{years} Yr</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={`${styles.customSlider} w-full`}
                style={{ "--progress": `${((years - 1) / (10 - 1)) * 100}%` }}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 Yr</span>
                <span>10 Yr</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {roi && (
              <>
                {/* Bar Chart instead of Pie */}
                <Card className="p-4">
                  <ChartContainer
                    config={{
                      investment: { label: "Investment", color: "var(--color-chart-2)" },
                      netGain: { label: "Net Gain", color: "var(--color-chart-1)" },
                    }}
                    className="h-[250px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={getChartData()} barSize={50}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(value)} />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                          {getChartData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </Card>

                {/* Monthly Salary */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Expected Salary</h3>
                  <div className="text-3xl font-bold text-green-700">{formatCurrency(roi.monthlyEMI)}</div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#166434] rounded-sm"></div>
                    <span className="text-sm text-muted-foreground flex-1">Course Fees</span>
                    <span className="font-semibold">{formatCurrency(roi.totalInvestment)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm bg-[#bbf7d0]"></div>
                    <span className="text-sm text-muted-foreground flex-1">Net Gain ({years} years)</span>
                    <span className="font-semibold">{formatCurrency(Math.max(0, roi.netGain))}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ROI Stats */}
        {roi && (
          <div className="mt-8 bg-[#edf4ee] rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Course Fees</div>
                <div className="text-xl font-bold text-green-700">{formatCurrency(roi.totalInvestment)}</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Net Gain ({years} years)</div>
                <div className="text-xl font-bold text-green-700">{formatCurrency(Math.max(0, roi.netGain))}</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Total Returns</div>
                <div className="text-xl font-bold text-green-700">{formatCurrency(roi.totalEarnings)}</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">ROI Percentage</div>
                <div className="text-xl font-bold text-green-700">{roi.roiPercentage.toFixed(0)}%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
