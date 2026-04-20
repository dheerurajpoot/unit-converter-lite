import { Metadata } from 'next'
import ConverterTool from '@/components/converter-tool'
import { SITE_NAME, SITE_URL } from '@/lib/constant'

export const metadata: Metadata = {
  title: `Unit Converter | ${SITE_NAME}`,
  description: 'Fast, accurate unit converter. Convert length, weight, temperature, volume, and area instantly.',
  openGraph: {
    title: `Unit Converter | ${SITE_NAME}`,
    description: 'Convert units instantly with our simple and accurate converter.',
    url: `${SITE_URL}/converter`,
    type: 'website',
  },
}

export default function ConverterPage() {
  const conversionGuide = [
    {
      category: 'Length',
      examples: [
        { from: '1 km', to: '0.621371 mi', description: 'Kilometer to Mile' },
        { from: '1 m', to: '3.28084 ft', description: 'Meter to Foot' },
        { from: '1 inch', to: '2.54 cm', description: 'Inch to Centimeter' },
      ],
    },
    {
      category: 'Weight',
      examples: [
        { from: '1 kg', to: '2.20462 lb', description: 'Kilogram to Pound' },
        { from: '1 oz', to: '28.3495 g', description: 'Ounce to Gram' },
        { from: '1 lb', to: '453.592 g', description: 'Pound to Gram' },
      ],
    },
    {
      category: 'Temperature',
      examples: [
        { from: '0°C', to: '32°F', description: 'Celsius to Fahrenheit' },
        { from: '100°C', to: '212°F', description: 'Boiling Water Temperature' },
        { from: '0 K', to: '-273.15°C', description: 'Kelvin to Celsius' },
      ],
    },
    {
      category: 'Volume',
      examples: [
        { from: '1 L', to: '0.264172 gal', description: 'Liter to US Gallon' },
        { from: '1 cup', to: '236.588 mL', description: 'Cup to Milliliter' },
        { from: '1 tbsp', to: '14.787 mL', description: 'Tablespoon to Milliliter' },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Unit Converter</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Convert between different units instantly and accurately. Select your conversion type and start converting.
              </p>
            </div>
          </div>
        </section>

        {/* Converter Tool */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ConverterTool />
          </div>
        </section>

        {/* Conversion Guide */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Common Conversion Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {conversionGuide.map((guide) => (
                <div key={guide.category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground border-l-4 border-primary pl-3">
                    {guide.category} Conversions
                  </h3>
                  <div className="space-y-3">
                    {guide.examples.map((example) => (
                      <div
                        key={example.from}
                        className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <p className="text-sm text-muted-foreground mb-1">{example.description}</p>
                        <p className="font-semibold text-foreground">
                          {example.from} = <span className="text-primary">{example.to}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  How accurate is the converter?
                </h3>
                <p className="text-muted-foreground">
                  Our converter uses standard international conversion factors and provides highly accurate results. Results are displayed with up to 6 decimal places for precision.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  What units are supported?
                </h3>
                <p className="text-muted-foreground">
                  We support conversions for Length, Weight, Temperature, Volume, and Area. Each category includes multiple commonly used units around the world.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Is {SITE_NAME} free to use?
                </h3>
                <p className="text-muted-foreground">
                  Yes! {SITE_NAME} is completely free and requires no registration. Use it as much as you want.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Can I use it offline?
                </h3>
                <p className="text-muted-foreground">
                  Once loaded, you can use the converter offline. It works in your browser without requiring an internet connection.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  How do I swap the units?
                </h3>
                <p className="text-muted-foreground">
                  Click the arrow button between the input and output fields to quickly swap the units. Your values will be swapped as well.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
