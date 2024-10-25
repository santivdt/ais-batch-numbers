'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Batch } from '@/lib/batch'
import { Button } from './ui/button'

const InfoCard = ({ batch }: { batch: Batch | null }) => {
  return (
    <>
      {batch && (
        <>
          <Card className='max-w-[500px] bg-emerald-900 text-white border-white border-2 relative py-4'>
            <h2 className='text-emerald-900 text-center text-3xl font-bold -mt-10 tracking-wide '>
              BATCH #{batch.batch_number}
            </h2>
            <CardHeader>
              <CardTitle>{batch.product}</CardTitle>
              <CardDescription className='text-white'>
                {batch.fishery_name} - {batch.batch_number}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li className='mb-2'>
                  <span className='font-bold'>Product:</span> {batch.product}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Product source:</span>{' '}
                  {batch.product_source}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>FAO Area:</span> {batch.FAO_Area}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Location:</span> {batch.location}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Fishery Information:</span>{' '}
                  {batch.fishery_name}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Ingredients:</span>{' '}
                  {batch.ingredients_en}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Ingrédients</span>{' '}
                  {batch.ingredients_fr}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Best before date:</span>{' '}
                  {batch.best_before_date}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Lot number:</span>{' '}
                  {batch.lot_number}
                </li>
                <li className='mb-2'>
                  <span className='font-bold'>Harvest method:</span>{' '}
                  {batch.harvest_method}
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {batch.url && (
                <Button variant='outline'>
                  <a href={batch.url} target='_blank'>
                    More about {batch.fishery_name}
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </>
      )}
    </>
  )
}

export default InfoCard
