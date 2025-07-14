'use client'

import React, { useState, useEffect, JSX } from 'react'

// this one should take an array og globals (sic) and map over them when rendering.
interface GlobalOnlyProps {
  globals: Record<string, any>[] | null
}

export default function GlobalOnly({ globals }: GlobalOnlyProps) {
  const [loadedGlobals, setLoadedGlobals] = useState<Record<string, any>[] | null>(null)

  useEffect(() => {
    if (globals) {
      setLoadedGlobals(globals)
    }
  }, [globals])

  if (loadedGlobals === null) {
    return <div>Loading globals...</div>
  }
  if (loadedGlobals === undefined || loadedGlobals.length === 0) {
    return <div>No globals found.</div> // Handle empty or undefined cases
  }

  return (
    <div>
      <div className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {loadedGlobals?.map((global, index) => (
          <div key={index}>
            {/* if there's a contact global presnet in the array, we'll render it */}
            {global.contactDetails && typeof global.contactDetails === 'object' && (
              <div>
                {/* Extract values using optional chaining and safe property access */}
                <p>Name: {global.contactDetails?.name || 'N/A'}</p>
                <p>Address: {global.contactDetails?.address || 'N/A'}</p>
                <p>Email: {global.contactDetails?.email || 'N/A'}</p>
              </div>
            )}

            {/*       if there's a cvEvents global present, we'll render it */}
            {Array.isArray(global.cvEvents) &&
              global.cvEvents.map((event, index) => (
                <div key={index}>
                  <p>
                    <strong>{event.year}</strong> {event.description}
                  </p>
                </div>
              ))}

            {global.exhibYears && (
              <>
                <h1 className="text-2xl">Ausstellungsbeteiligungen (Auswahl)</h1>
                {global.exhibYears.map((yearData, index) => (
                  <div key={index}>
                    <h3 className="text-xl">{yearData.year}</h3>
                    {yearData.exhibitions.map((exhibition, subIndex) => (
                      <div key={subIndex}>
                        <p>{exhibition.description}</p>
                        {exhibition.katalog !== null && ' K'}
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}

            {global.yearExhibPart && (
              <>
                <h1 className="text-2xl">Ausstellungsbeteiligungen (Auswahl)</h1>
                {global.yearExhibPart.map((yearData, index) => (
                  <div key={index}>
                    <h3 className="text-xl">{yearData.year}</h3>
                    {yearData.exhibitions.map((exhibition, subIndex) => (
                      <div key={subIndex}>
                        <p>{exhibition.description}</p>
                        {exhibition.katalog !== null && ' K'}
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}

            {global.acquisitionEvents && (
              <>
                <h1 className="text-2xl">Ankäufe</h1>
                {global.acquisitionEvents.map((event, index) => (
                  <div key={index}>
                    <p>{event.description}</p>
                  </div>
                ))}
              </>
            )}

            {/*     {Object.entries(global).map(([key, value]) => (
              <div key={key}>
                <b>{key}:</b> {JSON.stringify(value)}
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  )
}
