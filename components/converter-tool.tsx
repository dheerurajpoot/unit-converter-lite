'use client'
import { useState, useEffect } from 'react'
import { ArrowRightLeft, Calculator, History, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  conversionCategories,
  convert,
  formatNumber,
  getCategories,
  getUnits,
} from '@/lib/converters'
import { cn } from '@/lib/utils'

export default function ConverterTool() {
  const [category, setCategory] = useState('length')
  const [fromValue, setFromValue] = useState('')
  const [fromUnit, setFromUnit] = useState('meter')
  const [toUnit, setToUnit] = useState('kilometer')
  const [toValue, setToValue] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  // Update toValue when fromValue changes
  useEffect(() => {
    if (fromValue === '' || isNaN(Number(fromValue))) {
      setToValue('')
      return
    }

    const result = convert(Number(fromValue), fromUnit, toUnit, category)
    setToValue(formatNumber(result))
  }, [fromValue, fromUnit, toUnit, category])

  // Reset units when category changes
  useEffect(() => {
    const units = getUnits(category)
    if (units.length > 0) {
      setFromUnit(units[0].id)
      setToUnit(units[units.length > 1 ? 1 : 0].id)
      setFromValue('')
      setToValue('')
    }
  }, [category])

  const handleSwap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    setFromValue(toValue)
    setToValue(fromValue)
  }

  const units = getUnits(category)

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Card 
        className={cn(
          "relative overflow-hidden border-0 bg-background/40 backdrop-blur-xl shadow-2xl p-6 sm:p-10 transition-all duration-500",
          isHovered ? "shadow-primary/20 ring-1 ring-primary/20" : "shadow-black/10"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Smart Conversion</h2>
          </div>

          {/* Category Selection Carousel/Grid */}
          <div className="mb-10">
            <label className="block text-xs font-bold mb-4 text-muted-foreground uppercase tracking-widest">
              Available Categories
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {getCategories().map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border flex flex-col items-center gap-2",
                    category === cat.id
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                      : "bg-card/50 text-muted-foreground border-border/50 hover:border-primary/30 hover:bg-card"
                  )}
                >
                  <span className="capitalize">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Conversion Interface */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* From Input Group */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">From</span>
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Input Value</span>
              </div>
              <div className="group relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={fromValue}
                  onChange={(e) => setFromValue(e.target.value)}
                  className="h-16 text-2xl font-semibold pl-6 pr-32 border-2 border-border/50 bg-card/30 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-2xl"
                />
                <div className="absolute right-2 top-2 bottom-2 w-28">
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger className="h-full border-0 bg-muted/50 hover:bg-muted transition-colors rounded-xl font-medium">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit.id} value={unit.id} className="font-medium">
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* To Input Group */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">To</span>
                <div className="flex items-center gap-1">
                   <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                   <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">Real-time Result</span>
                </div>
              </div>
              <div className="group relative">
                <Input
                  type="text"
                  placeholder="RESULT"
                  value={toValue}
                  readOnly
                  className="h-16 text-2xl font-bold pl-6 pr-32 border-2 border-primary/20 bg-primary/5 focus-visible:ring-primary transition-all rounded-2xl text-primary"
                />
                <div className="absolute right-2 top-2 bottom-2 w-28">
                  <Select value={toUnit} onValueChange={setToUnit}>
                    <SelectTrigger className="h-full border-0 bg-primary/10 hover:bg-primary/20 transition-colors rounded-xl font-medium text-primary">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit.id} value={unit.id} className="font-medium">
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Button (Floating Center) */}
          <div className="flex justify-center -my-4 relative z-20">
            <Button
              onClick={handleSwap}
              size="icon"
              className="rounded-full h-12 w-12 bg-foreground text-background hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-primary/20 ring-4 ring-background"
              aria-label="Swap units"
            >
              <ArrowRightLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* Enhanced Result Card */}
          {fromValue && toValue && (
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl border border-border/50 shadow-inner relative overflow-hidden group animate-in zoom-in-95 duration-500">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <History className="w-20 h-20 rotate-12" />
               </div>
               
               <div className="relative space-y-4">
                 <div className="flex items-center gap-2">
                   <div className="h-1 w-8 bg-primary rounded-full" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Detailed Conversion</span>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row sm:items-end gap-3 flex-wrap">
                   <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-bold tracking-tight">{fromValue}</span>
                     <span className="text-sm font-medium text-muted-foreground">{units.find((u) => u.id === fromUnit)?.label}</span>
                   </div>
                   
                   <div className="h-10 flex items-center px-4">
                      <span className="text-2xl font-light text-muted-foreground">=</span>
                   </div>
                   
                   <div className="flex items-baseline gap-2">
                     <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">
                        {toValue}
                     </span>
                     <span className="text-sm font-bold text-secondary uppercase tracking-wider">{units.find((u) => u.id === toUnit)?.label}</span>
                   </div>
                 </div>
                 
                 <p className="text-xs text-muted-foreground/60 italic">
                   Converted using standard {category} formulas with 6 decimal precision.
                 </p>
               </div>
            </div>
          )}
        </div>
      </Card>
      
      {/* Quick Actions / Tips */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
         <span className="flex items-center gap-1.5 px-3 py-1 bg-card/30 rounded-full border border-border/50"><Sparkles className="w-3 h-3" /> Auto-Updating</span>
         <span className="flex items-center gap-1.5 px-3 py-1 bg-card/30 rounded-full border border-border/50"><ArrowRightLeft className="w-3 h-3" /> Instant Swap</span>
         <span className="flex items-center gap-1.5 px-3 py-1 bg-card/30 rounded-full border border-border/50"><Calculator className="w-3 h-3" /> 5+ Categories</span>
      </div>
    </div>
  )
}
