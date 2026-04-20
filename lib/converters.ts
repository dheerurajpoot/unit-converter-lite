// Unit conversion constants and functions

export const conversionCategories = {
  length: {
    name: 'Length',
    units: {
      meter: { label: 'Meter (m)', factor: 1 },
      kilometer: { label: 'Kilometer (km)', factor: 0.001 },
      centimeter: { label: 'Centimeter (cm)', factor: 100 },
      millimeter: { label: 'Millimeter (mm)', factor: 1000 },
      mile: { label: 'Mile (mi)', factor: 0.000621371 },
      yard: { label: 'Yard (yd)', factor: 1.09361 },
      foot: { label: 'Foot (ft)', factor: 3.28084 },
      inch: { label: 'Inch (in)', factor: 39.3701 },
    },
  },
  weight: {
    name: 'Weight',
    units: {
      kilogram: { label: 'Kilogram (kg)', factor: 1 },
      gram: { label: 'Gram (g)', factor: 1000 },
      milligram: { label: 'Milligram (mg)', factor: 1000000 },
      pound: { label: 'Pound (lb)', factor: 2.20462 },
      ounce: { label: 'Ounce (oz)', factor: 35.274 },
      ton: { label: 'Metric Ton (t)', factor: 0.001 },
    },
  },
  temperature: {
    name: 'Temperature',
    units: {
      celsius: { label: 'Celsius (°C)', type: 'special' },
      fahrenheit: { label: 'Fahrenheit (°F)', type: 'special' },
      kelvin: { label: 'Kelvin (K)', type: 'special' },
    },
  },
  volume: {
    name: 'Volume',
    units: {
      liter: { label: 'Liter (L)', factor: 1 },
      milliliter: { label: 'Milliliter (mL)', factor: 1000 },
      gallon_us: { label: 'US Gallon (gal)', factor: 0.264172 },
      gallon_uk: { label: 'UK Gallon (gal)', factor: 0.219969 },
      cubic_meter: { label: 'Cubic Meter (m³)', factor: 0.001 },
      cubic_centimeter: { label: 'Cubic Centimeter (cm³)', factor: 1000 },
      cup: { label: 'Cup (US)', factor: 4.22675 },
      tablespoon: { label: 'Tablespoon (tbsp)', factor: 67.628 },
    },
  },
  area: {
    name: 'Area',
    units: {
      square_meter: { label: 'Square Meter (m²)', factor: 1 },
      square_kilometer: { label: 'Square Kilometer (km²)', factor: 0.000001 },
      square_centimeter: { label: 'Square Centimeter (cm²)', factor: 10000 },
      square_mile: { label: 'Square Mile (mi²)', factor: 0.000000386102 },
      square_yard: { label: 'Square Yard (yd²)', factor: 1.19599 },
      square_foot: { label: 'Square Foot (ft²)', factor: 10.7639 },
      square_inch: { label: 'Square Inch (in²)', factor: 1550 },
      hectare: { label: 'Hectare (ha)', factor: 0.0001 },
      acre: { label: 'Acre', factor: 0.000247105 },
    },
  },
}

// Standard conversion function for linear conversions
export function convertUnits(
  value: number,
  fromUnit: string,
  toUnit: string,
  category: string
): number {
  const cats = conversionCategories as Record<string, any>
  const cat = cats[category]

  if (!cat || !cat.units[fromUnit] || !cat.units[toUnit]) {
    return NaN
  }

  const fromFactor = cat.units[fromUnit].factor
  const toFactor = cat.units[toUnit].factor

  // Convert to base unit, then to target unit
  const baseValue = value / fromFactor
  return baseValue * toFactor
}

// Temperature conversion (special case)
export function convertTemperature(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  let celsius = value

  // Convert to Celsius first
  if (fromUnit === 'fahrenheit') {
    celsius = (value - 32) * (5 / 9)
  } else if (fromUnit === 'kelvin') {
    celsius = value - 273.15
  }

  // Convert from Celsius to target
  if (toUnit === 'fahrenheit') {
    return celsius * (9 / 5) + 32
  } else if (toUnit === 'kelvin') {
    return celsius + 273.15
  }

  return celsius
}

// Main conversion handler
export function convert(
  value: number,
  fromUnit: string,
  toUnit: string,
  category: string
): number {
  if (isNaN(value) || value === null) {
    return 0
  }

  if (category === 'temperature') {
    return convertTemperature(value, fromUnit, toUnit)
  }

  return convertUnits(value, fromUnit, toUnit, category)
}

// Get all categories
export function getCategories() {
  return Object.entries(conversionCategories).map(([key, value]) => ({
    id: key,
    name: value.name,
  }))
}

// Get units for a category
export function getUnits(category: string) {
  const cats = conversionCategories as Record<string, any>
  const cat = cats[category]

  if (!cat) return []

  return Object.entries(cat.units).map(([key, value]: [string, any]) => ({
    id: key,
    label: value.label,
  }))
}

// Format number for display
export function formatNumber(num: number, decimals: number = 6): string {
  if (!isFinite(num)) return '0'

  // Remove trailing zeros and unnecessary decimal point
  const formatted = parseFloat(num.toFixed(decimals))
  return formatted.toString()
}
